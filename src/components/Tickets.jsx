import ticketIcon from '../assets/imgs/ticket-icon.png';

export const Tickets = () => {
    return (
        <section id='tickets-section' className='pt-3 pb-3'>
            <div className='row text-center mb-3'>
                <h3 className='font-el-messiri mb-0'>Consulta tus boletos.</h3>
                <span className='icon-sm'>
                    <img src={ticketIcon} />
                </span>
            </div>

            <div className='row text-center mb-0'>
                <form>
                    <div className='row mb-0'>
                        <div className='col-1' />
                        <div className='col-8 d-flex justify-content-start'>
                            <label for='name' className='form-label'>Nombre completo:</label>
                        </div>
                    </div>

                    <div className='row mt-0'>
                        <div className='col-1' />
                        <div className='col-8 pe-0'>
                            <input id='name' className='form-control' type='text'></input>
                        </div>
                        <div className='col-3 ps-1 d-flex flex-row justify-content-start'>
                            <button type='button' class='btn btn-primary'>Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
