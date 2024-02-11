import { useFetchTickets } from "../hooks/useFetchTickets"
import { TicketItem } from "./TicketItem";

export const TicketGrid = ({ searchName }) => {

    const { tickets, isLoading} = useFetchTickets( searchName );

    return (
        <>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <div className="ticket-grid">
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
