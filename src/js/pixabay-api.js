import axios from "axios";

export class SearchPhoto{
    constructor () {
        this.key= '38624939-e92997ad19b30f4e8eb520cfa';
        this.page = 1;
        this.per_page = 40;
        this.safesearch = true;
        this.image_type = 'photo';
        this.orientation = 'horizontal';
    };

    async getPhoto(q) {
        const PARAMS = new URLSearchParams({
            key: this.key,
            q: q.toLowerCase().split(' ').join('+'),
            page: this.page,
            per_page: this.per_page,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: this.safesearch,
        });
        const url = `https://pixabay.com/api/?${PARAMS}`;
        const response = await axios.get(url);
        return response.data
     }
}