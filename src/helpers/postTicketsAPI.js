import { BASE_API_PATH } from '../util/marryMeAPIUtils';

export const postTicketsAPI = async (bodyRequest) => {


    const url = `${BASE_API_PATH}/guest`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyRequest)
    };
    const response = await fetch(url, requestOptions, { mode: 'cors' });
    const data = await response.json();

    if (response.status == 201) {
        const tickets = data.map(ticket => ({
            id: ticket.id,
            gender: ticket.gender,
            fullName: ticket.full_name,
            status: ticket.status
        }));
        return tickets;
    } else {
        return [];
    }
};
