import axios from 'axios';

const BASE_URL = 'https://api.informatika.lol';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'  // Changed to JSON content type
  }
});

export const api = {
  getUserInfo: () => axiosInstance.get('/uzivatel'),
  getProjects: () => axiosInstance.get('/napady'),
  submitRating: (data) => {
    // Post JSON data directly
    return axiosInstance.put('/hodnoceni', data);
  }
};
