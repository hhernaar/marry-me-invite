import tickIcon from '../assets/icons/ticket/tick-icon.png';
import crossIcon from '../assets/icons/ticket/cross-icon.png';
import { guestsStatusEnum } from '../util/guestsStatusEnum';
import { genderEnum } from '../util/genderEnum';
import { TicketItemPending } from './TicketItemPending';


export const TicketItem = ({ ticket }) => {

    const getIcon = (gender) => {
        const imageName = (gender == genderEnum.MALE ? 'boy-' : 'girl-') + Math.floor(Math.random() * 5 + 1);
        return new URL(
            `../assets/icons/people/${imageName}.png`,
            import.meta.url)
            .href;
    }

    return (
        <div className='ticket-row'>
            <div className='ticket'>

                <div className='ticket-header'>
                    <div className='icon-sm'>
                        <img src={getIcon(ticket.gender)} />
                    </div>
                </div>


                <div className='ticket-body pt-4 pb-3'>
                    <div className='row'>
                        {
                            ticket.status == guestsStatusEnum.PENDING &&
                            <div className="col-12">
                                <p className='card-text'>Nos encantaria contar con tu presencia</p>
                            </div>
                        }
                        <div className='col-12 pt-2'>
                            <span className='guest-name'>
                                {ticket.gender == 'M' ?
                                    <b>Invitado:</b>
                                    : <b>Invitada:</b>
                                } &nbsp;{ticket.fullName}
                            </span>
                        </div>
                    </div>

                    <div className="row">
                        {
                            ticket.status == guestsStatusEnum.PENDING ?
                                <TicketItemPending  
                                    ticket={ticket}
                                />
                                :
                                <>
                                    <div className='icon-sm'>
                                        <img src={ticket.status == guestsStatusEnum.ACCEPTED ? tickIcon : crossIcon} />
                                        <p className='card-text'>Gracias, hemos recibido tu respuesta.</p>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
