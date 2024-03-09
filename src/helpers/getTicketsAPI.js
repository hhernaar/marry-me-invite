import { BASE_API_PATH } from '../util/marryMeAPIUtils';

export const getTicketsAPI = async (name) => {


    const normalizedName = name.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
    const url = `${BASE_API_PATH}/guest?full_name=${normalizedName}`;
    const resp = await fetch(url, { mode: 'cors' });

    //const { data } = await resp.json();
    const data = await resp.json();
    if (resp.status == 200) {
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
