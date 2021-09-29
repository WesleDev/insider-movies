import axios from 'axios';

//https://api.themoviedb.org/3/ movie/now_playing ?api_key=4ba5c0d434e003a484b95cb97fe9f3db&language=pt-BR&page=1

export const key = '4ba5c0d434e003a484b95cb97fe9f3db';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default api;
