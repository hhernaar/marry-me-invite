import { useFetchTickets } from "../hooks/useFetchTickets"
import { TicketItem } from "./TicketItem";

export const TicketGrid = ({ searchName }) => {

    const { tickets, isLoading} = useFetchTickets( searchName );

    return (
        <>
            <h3>{ searchName }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <div className="card-grid">
                {
                    tickets.map( ( ticket ) => (
                        <TicketItem 
                            key={ ticket.id } 
                            { ...ticket }
                        />
                    ))
                }
                
            </div>

        </>
    )
}
