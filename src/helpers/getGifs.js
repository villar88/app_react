export const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=10&api_key=`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    /**
     * Forma de llenar un array de objetos, en este caso la data obtenida de la petición.
     */
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}