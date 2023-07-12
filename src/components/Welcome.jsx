import mainSm from '../assets/imgs/main-sm.jpg'
import mainMd from '../assets/imgs/main-md.jpg'
import mainLg from '../assets/imgs/main-lg.jpg'

export const Welcome = () => {
    return (
        <>
            <section className='position-relative d-flex justify-content-center'>
                
                <picture>
                    <source media="(min-width: 920px)" srcSet={ mainLg } />
                    <source media="(min-width: 768px)" srcSet={ mainMd } />
                    <img src={ mainSm }/>
                </picture>

                <div className='background-white position-absolute welcome-date container-circle d-flex flex-column justify-content-center'>
                    <span>
                        <h1 className='parisienne-regular'>
                            <span>Nuestra boda</span>
                        </h1>
                        <div className='merriweather-regular'>
                            <h3 className='mb-0'>
                                <span>Adriana</span>
                            </h3>
                            <hr className='text-separator mb-0' data-text='&' />
                            <h3>
                                <span>Aaron</span>
                            </h3>
                        </div>
                        <h6 className='merriweather-regular'>14 Sep, 2024</h6>
                    </span>
                </div>
            </section>
        </>
    )
}
