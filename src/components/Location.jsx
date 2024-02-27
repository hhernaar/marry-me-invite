import churchIcon from '../assets/icons/church/church-icon-color.png';

export const Location = () => {
    return (
        <section id='location-section' className='pt-3 pb-3'>
            <div className="row text-center mb-0">
                <h1 className='font-el-messiri mb-0'>¿Cómo llegar?</h1>
                <span className='icon-sm'>
                    <img src={churchIcon} />
                </span>
            </div>

            <div className='row text-center mb-0'>
                <div className='col-12'>
                    <span className='mb-0'>Jardin La Estancia</span>
                </div>
                <div className='col-12'>
                    <span className='font-el-messiri location-time mb-0'>14:30 hrs.</span>
                </div>                
                <div className='col-12'>
                    <span className='mb-0'>Calle Cuahutémoc No. 625. El Empleado. C.P. 62250. Cuernavaca. Morelos.</span>
                </div>
                <div className="col-1"></div>
                <div className='col-10' id='location-map'>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.680515850432!2d-99.2384438242455!3d18.94553038223242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf9811d41b3b%3A0x75413dd7cdaa4c7b!2sJardin%20La%20Estancia!5e0!3m2!1sen!2smx!4v1689211941628!5m2!1sen!2smx'
                        allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
                </div>
                <div className="col-1"></div>
            </div>
        </section>
    )
}
