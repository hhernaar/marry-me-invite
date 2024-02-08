import { useState } from 'react';
import ticketIcon from '../assets/imgs/ticket-icon.png';
import { useForm } from '../hooks/useForm';
import { TicketGrid } from './TicketGrid';

export const TicketsForm = () => {

    const { inputNameValue, onInputChange, onResetForm } = useForm({ inputNameValue: '' });
    const [ searchName, setSearchName ] = useState('');

    const onSearchSubmit = (event) =>{
        event.preventDefault();
        onResetForm();
        setSearchName(inputNameValue);
      }

    return (
        <section id='tickets-section' className='pt-3 pb-3'>
            <div className='row text-center mb-3'>
                <h3 className='font-el-messiri mb-0'>Consulta tus boletos.</h3>
                <span className='icon-sm'>
                    <img src={ticketIcon} />
                </span>
            </div>

            <div className='row text-center mb-0'>
                <form onSubmit={ onSearchSubmit }>
                    <div className='row mb-0'>
                        <div className='col-1' />
                        <div className='col-8 d-flex justify-content-start'>
                            <label htmlFor='name' className='form-label'>Nombre completo:</label>
                        </div>
                    </div>

                    <div className='row mt-0'>
                        <div className='col-1' />
                        <div className='col-8 pe-0'>
                            <input id='inputName' name='inputNameValue' autoComplete='off' type='text' className='form-control'
                                value={ inputNameValue } onChange={ onInputChange }
                            />
                        </div>
                        <div className='col-3 ps-1 d-flex flex-row justify-content-start'>
                            <button className='btn btn-primary'>Enviar</button>
                        </div>
                    </div>
                </form>
                {
                    searchName != '' &&
                    <TicketGrid key={searchName} searchName = {searchName} />
                }
            </div>
        </section>
    )
}