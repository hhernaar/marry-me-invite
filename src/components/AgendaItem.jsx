import React from 'react'

export const AgendaItem = (item) => {

    const getIcon = (iconName) => {
        return new URL(`../assets/icons/agenda/${iconName}.png`, import.meta.url).href;
    }

    return (
        <div className='agenda-item mt-2'>

            <div className='icon-sm'>
                <img src={getIcon(item.icon)} />
            </div>

            <div className="agenda-circle-container blue">
                <div className="circle">
                </div>
            </div>

            <div className='agenda-hour mt-2'>
                <span className='font-el-messiri'>{item.hour} hrs.</span>
            </div>

            <div className='agenda-description mt-0'>
                <span className='font-el-messiri'>{item.description}</span>
            </div>

        </div>
    )
}
