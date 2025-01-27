import axios from 'axios';

const BASE_URL = 'https://api.informatika.lol';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export const api = {
  getUserInfo: () => axiosInstance.get('/uzivatel?demo'),
  getProjects: () => axiosInstance.get('/napady'),
  submitRating: (data) => axiosInstance.post('/hodnoceni', {
    emojis: data.emojis,
    projectId: data.projectId,
    name: data.name,
    userId: data.userId
  })
};
