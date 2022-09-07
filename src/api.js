
import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getPixabay = async (query, currentPage) => {
    const result = await axios({
        params: {
            key: '28484893-533bc63a458af3cd59f9c6cd5',
            image_type: 'photo',
            orientation: 'horizontal',
            page: currentPage,
            per_page: 12,
            q: query
        }
    });
    const requiredResult = result.data.hits.map(
        ({ id, webformatURL, largeImageURL }) => ({
            id,
            webformatURL,
            largeImageURL
        })
    );
    return requiredResult;
}