export const Where = () => {

    const googleMapsLink = 'https://www.google.com.mx/maps/place/Jardin+La+Estancia/@18.9455355,-99.2384438,17z/data=!3m1!4b1!4m6!3m5!1s0x85cddf9811d41b3b:0x75413dd7cdaa4c7b!8m2!3d18.9455304!4d-99.2358689!16s%2Fg%2F1tdg83y8?entry=ttu';

    return (
        <>
            <hr className='text-separator' data-text='Donde' />
            <section className='merriweather-regular mt-3'>

                <img style={{ content: 'var(--galery-image-place)' }} />
                <div className='background-white d-flex justify-content-center' style={{ top: '0%', left:'10%', borderRadius:'15%'}}>
                    <span>
                        Jardin La Estancia
                    </span>
                </div>

            </section>
        </>
    )
}
