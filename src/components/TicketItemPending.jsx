import { useEffect, useState } from 'react';
import { guestsStatusEnum } from '../util/guestsStatusEnum';

export const TicketItemPending = ({ ticket }) => {

    const [radioValue, setRadioValue] = useState({ id:ticket.id, status: guestsStatusEnum.ACCEPTED});
    
    useEffect(() => {   
    }, [radioValue]);

    const handleOnChange = (e) => {
        setRadioValue({ 
            id: e.target.name,
            status: e.target.value
        });
    }

    return (
        <>
            <hr className='ticket-pending-div mt-4' />
            <div className='d-flex justify-content-evenly pt-2'>
                <div className='form-check'>
                    <input className='form-check-input'
                        type='radio'
                        name={ticket.id}
                        value={guestsStatusEnum.ACCEPTED}
                        id={'accept-' + ticket.id}
                        checked={radioValue.status === guestsStatusEnum.ACCEPTED}
                        onChange={handleOnChange}
                    />
                    <label className='form-check-label' htmlFor={'accept-' + ticket.id}>Asistiré</label>
                </div>
                <div className='form-check'>
                    <input className='form-check-input'
                        type='radio'
                        name={ticket.id}
                        value={guestsStatusEnum.REJECTED}
                        id={'reject-' + ticket.id}
                        checked={radioValue.status === guestsStatusEnum.REJECTED}
                        onChange={handleOnChange}
                    />
                    <label className='form-check-label' htmlFor={'reject-' + ticket.id}>No asistiré</label>
                </div>
            </div>
        </>
    )
}
