import tickIcon from '../assets/icons/tick-icon.png';
import crossIcon from '../assets/icons/cross-icon.png';
import { guestsStatusEnum } from '../util/guestsStatusEnum';
import { genderEnum } from '../util/genderEnum';

export const TicketItem = (ticket) => {

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
                            <span>
                                {ticket.gender == 'M' ?
                                    <b>Invitado:</b>
                                    : <b>Invitada:</b>
                                } &nbsp;{ticket.firstName}
                            </span>
                        </div>
                        <div className='col-12 mb-2'>
                            <span>{ticket.lastName}</span>
                        </div>
                    </div>

                    <div className="row">
                        {
                            ticket.status == guestsStatusEnum.PENDING ?
                                <>
                                    <hr className="ticket-pending-div mt-4" />
                                    <div className="d-flex justify-content-evenly pt-2">
                                        <div className="form-check">
                                            <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' defaultChecked />
                                            <label className='form-check-label' htmlFor='flexRadioDefault1'>
                                                Asistiré
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' />
                                            <label className='form-check-label' htmlFor='flexRadioDefault2'>
                                                No asistiré
                                            </label>
                                        </div>
                                    </div>
                                </>
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
