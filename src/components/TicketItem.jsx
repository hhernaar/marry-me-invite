import React from 'react'

export const TicketItem = (ticket) => {
    return (
        <div className="card">
            {/*<p>{ticket.id}</p>*/}
            <p>Nombre: {ticket.firstName}</p>
            <p>Apellido: {ticket.lastName}</p>
            <p>Familia: {ticket.family}</p>
            <p>Estatus: {ticket.status}</p>
        </div>
    )
}
