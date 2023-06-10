import React from 'react'

export const Img = ({ imgSrc }) => {
    return (
        <div className='row'>
            <div className='col-12'>
                <img src={imgSrc} style={{ opacity: '0' }} />
            </div>
        </div>
    )
}
