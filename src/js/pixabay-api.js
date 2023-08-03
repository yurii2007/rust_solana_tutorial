import axios from "axios";

export class SearchPhoto{
    #BASE_URL = 'https://pixabay.com/api/';
    #API_KEY = '38624939-e92997ad19b30f4e8eb520cfa'
    constructor () {
        this.page = 1;
        this.per_page = 40;
    };

    async getPhoto(q) {
        const PARAMS = new URLSearchParams({
            key: this.#API_KEY,
            q: q,
            page: this.page,
            per_page: this.per_page,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        });
        const url = `${this.#BASE_URL}?${PARAMS}`;
        const response = await axios.get(url);
        return response.data
     }
}