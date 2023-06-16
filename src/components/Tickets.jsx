import React from 'react'

export const Tickets = () => {
    return (
        <>
            <section
                className='container d-flex justify-content-center position-relative '
            >

                <div className="tickets">
                    <img style={{ content: 'var(--guest-background-img-url)', opacity: '0' }} />
                </div>

                <div className='row d-flex justify-content-center position-absolute top-40 merriweather-regular'>
                    <div className='col-12 d-flex justify-content-center'>
                        Bob & Alice.
                    </div>
                    <div className='col-12 d-flex justify-content-center'>
                        2 tickets
                    </div>
                </div>

            </section>
        </>
    )
}
