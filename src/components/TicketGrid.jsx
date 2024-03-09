import { useFetchTickets } from '../hooks/useFetchTickets';
import { TicketItem } from './TicketItem';
import { guestsStatusEnum } from '../util/guestsStatusEnum';
import { useEffect, useState } from 'react';
import { postTicketsAPI } from '../helpers/postTicketsAPI';

export const TicketGrid = ({ searchName, onCancelSubmit }) => {

    const { tickets, isLoading, setTickets, setIsLoading } = useFetchTickets(searchName);
    const [ requestBody, setRequestBody ] = useState([]);

    useEffect(() => {
      if(requestBody.length > 0) {
        postTickets()
      }
    }, [requestBody])
    
    const postTickets = async() => {
        setIsLoading(true);
        const tickets = await postTicketsAPI(requestBody);
        setTickets(tickets);
        setIsLoading(false);
    }

    const onConfirmSubmit = (event) => {
        event.preventDefault();
        const responses = [];
        document.querySelectorAll('input[type="radio"]:checked')
            .forEach((radio) => {
                responses.push({
                    'id': radio.name,
                    'status': radio.value
                })
            });
        setRequestBody(responses);
    };
    
    return (
        <>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            {
                !isLoading && tickets.length == 0 &&
                <>
                    <h1>No encontramos tu nombre :</h1>
                    <a href={'#location-section'} className='btn btn-primary' onClick={(e) => onCancelSubmit(e)}>Cancelar</a>
                </>
            }

            {

                !isLoading && tickets.length > 0 &&
                <>
                    <div className='ticket-grid'>
                        {
                            tickets.map((ticket) => (
                                <TicketItem
                                    key={ticket.id}
                                    ticket = {ticket}
                                />
                            ))
                        }
                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <div className=''>
                            <a href={'#location-section'} className='btn btn-primary' onClick={(e) => onCancelSubmit(e)}>Cancelar</a>
                            {/*<Link to='#location-section' className='btn btn-primary' onClick={ (e) => onCancelSubmit(e)} >Cancelar</Link>*/}
                        </div>
                        {

                            tickets.filter(ticket => (ticket.status == guestsStatusEnum.PENDING)).length > 0
                            &&
                            <div className=''>
                                <button className='btn btn-primary' type='submit' onClick={(e) => onConfirmSubmit(e)}>Enviar</button>
                            </div>
                        }
                    </div>
                </>
            }

        </>
    )
}
