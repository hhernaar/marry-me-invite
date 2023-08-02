import { Map } from "./Map"

export const Where = () => {


    return (
        <>
            <section className='merriweather-regular'>

                <div className='text-center parisienne-regular pink-boder-container'>
                    <div className='col-12'>
                        <h1 className='bold'>Cuando</h1>
                    </div>
                    <div className='col-12'>
                        <h2>Esperamos con mucha emocion verlos a todos pronto</h2>
                    </div>
                </div>

                <div className='d-flex justify-content-around flex-wrap'>

                    <div className='text-center col-12 col-md-4 ritual-container'>

                        <div className='row me-0'>
                            <div className='col-12'>
                                <span className='diamon-ring'></span>
                            </div>
                            <div className='col-12 parisienne-regular'>
                                <h1>La ceremonia</h1>
                            </div>
                        </div>

                        <div className='row me-0'>
                            <div className='col-12'>
                                Sábado 14 de Septiembre 2024 - 14:30
                                Jardín La Estancia, Cuernavaca Morelos
                            </div>
                        </div>
                    </div>

                    <div className='text-center col-6 col-md-4 pink-boder-container'>
                        <div className='row me-0'>
                            <div className='col-12'>
                                <span className='fa-solid fa-martini-glass-citrus'></span>
                            </div>
                            <div className='col-12 parisienne-regular'>
                                <h1>La recepción</h1>
                            </div>
                        </div>

                        <div className='row me-0'>
                            <div className='col-12'>
                                Coctel de bienvenida y asignacion de mesas 16:00 - 17:00
                            </div>
                        </div>
                    </div>

                    <div className='text-center col-6 col-md-4 pink-boder-container'>
                        <div className='row me-0'>
                            <div className='col-12'>
                                <span className='fa-solid fa-cake-candles'></span>
                            </div>
                            <div className='col-12 parisienne-regular'>
                                <h1>La fiesta</h1>
                            </div>
                        </div>

                        <div className='row me-0'>
                            <div className='col-12'>
                               La fiesta iniciara a las 17:00
                            </div>
                        </div>
                    </div>
                </div>

                <Map />

            </section>
        </>
    )
}
