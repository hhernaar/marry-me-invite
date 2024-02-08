export const getTicketsAPI = async(name) => {

    /*const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;*/
    console.log(name);
    return [
        {
            'id': 1,
            'firstName': 'Roberto Aaron',
            'lastName': 'Hernandez Hernandez',
            'family': 'Hernandez Huerta',
            'status': 'PENDING'
        },
        {
            'id': 2,
            'firstName': 'Adriana Marisol',
            'lastName': 'Huerta Garrido',
            'family': 'Hernandez Huerta',
            'status': 'PENDING'
        }
    ];
};
