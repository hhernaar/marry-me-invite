import { Timer } from "./Timer"

export const Welcome = () => {
    return (
        <>
            <section id='welcome'
                className='container d-flex justify-content-center'
            >
                    <div className='row text-white'>
                        <div className='col-12 d-flex justify-content-center'>
                            <span>
                                <h1 className='parisienne-regular'>
                                    Adriana & Aaron
                                </h1>
                            </span>
                        </div>
                        <div className='col-12 d-flex justify-content-center'>
                            <span>
                                <h4 className='merriweather-regular'>
                                    Sept 14, 2024
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
