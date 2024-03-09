import { BASE_API_PATH } from '../util/marryMeAPIUtils';
import { getTicketsAPI } from './getTicketsAPI';

export const postTicketsAPI = async (bodyRequest, name) => {


    const url = `${BASE_API_PATH}/guest`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyRequest)
    };
    const response = await fetch(url, requestOptions, { mode: 'cors' });
    const data = await response.json();

    if (response.status == 201) {
        return getTicketsAPI(name);
    } else {
        return [];
    }
};
