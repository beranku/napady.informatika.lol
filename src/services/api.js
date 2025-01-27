import axios from 'axios';

const BASE_URL = 'https://api.informatika.lol';

export const api = {
  getUserInfo: () => axios.get(`${BASE_URL}/uzivatel`, {
    withCredentials: true,
  }),
  getProjects: () => axios.get(`${BASE_URL}/napady`, { withCredentials: true }),
  submitRating: (data) => axios.post(`${BASE_URL}/hodnoceni`, data, { withCredentials: true })
};
