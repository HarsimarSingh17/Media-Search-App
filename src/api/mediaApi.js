import axios from 'axios';history

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query, page=1, per_page=20){

    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params:{query, page, per_page},
        headers:{Authorization: `Client-ID ${UNSPLASH_KEY}`}
    });

    return res.data.results;
}

export async function fetchGIFS(query, page=1, per_page=20){
    
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params:{
            api_key: import.meta.env.VITE_GIPHY_KEY,
            q: query,
            limit: per_page,
            offset: (page-1)* per_page
        }
    });

    return res.data.data;
}