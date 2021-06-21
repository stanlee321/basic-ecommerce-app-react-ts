import { API_URL } from "./config";


// const defaultConfig = {
//     method : 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// }


export const fetchMovies =  async (searchTerm: any, page: any) => {
    const endpoint = searchTerm? `${API_URL}/`:  `${API_URL}/`;

    return await (await fetch(endpoint)).json();
}

