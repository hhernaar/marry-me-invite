import { useEffect, useState } from 'react';
import { getTicketsAPI } from '../helpers/getTicketsAPI';

export const useFetchTickets = ( name ) => {
  
    const [ tickets, setTickets ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getTickets = async() => {
        const tickets = await getTicketsAPI(name);
        setTickets(tickets);
        setIsLoading(false);
    };

    useEffect(() => {
        getTickets()
    }, []);

    return {
        tickets,
        isLoading,
        setTickets,
        setIsLoading
    };
}
