export const Welcome = () => {
    return (
        <>
            <section className='position-relative'>
                <img style={{ content: 'var(--main-image-url)' }} />
                <div className='background-white position-absolute welcome-timer container-circle'>
                    <span>
                        <h3 className='parisienne-regular'>Nuestra boda</h3>
                        <div className='merriweather-regular'>
                            <h4>Adriana</h4>
                            <hr className='text-separator' data-text='&'/>
                            <h4>Aaron</h4>
                            <h5>14 Sep, 2024</h5>
                        </div>
                    </span>
                </div>
            </section>
        </>
    )
}
