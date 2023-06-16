import { Timer } from "./Timer"

export const Welcome = () => {
    return (
        <>
            <section
                className='container d-flex justify-content-center position-relative'
            >
                <div className="welcome">
                    <img style={{content: 'var(--countdowm-background-img-url)', opacity: '0'}} />
                </div>

                <div className='row d-flex justify-content-center position-absolute top-50 simple-text-white'>
                    <div className='col-12 d-flex justify-content-center'>
                        <span>
                            <h1 className='parisienne-regular'>
                                Adriana & Aaron
                            </h1>
                        </span>
                    </div>
                    <div className='separator col-12 mb-4'>SAVE THE DATE</div>
                    <div className='col-12 d-flex justify-content-center'>
                        <span>
                            <h4 className='merriweather-regular'>
                                September 14th 2024
                            </h4>
                        </span>
                    </div>
                    <div className='col-12 d-flex justify-content-center merriweather-regular'>
                        <Timer />
                    </div>
                </div>

            </section>
        </>
    )
}
