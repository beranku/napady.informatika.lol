import axios from 'axios';

const BASE_URL = 'https://api.informatika.lol';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'  // Changed to simple content type
  }
});

export const api = {
  getUserInfo: () => axiosInstance.get('/uzivatel'),
  getProjects: () => axiosInstance.get('/napady'),
  submitRating: (data) => {
    // Convert data to URL encoded format
    const params = new URLSearchParams();
    params.append('emojis', data.emojis);
    params.append('projectId', data.projectId);
    params.append('name', data.name);
    params.append('userId', data.userId);
    
    return axiosInstance.post('/hodnoceni', params);
  }
};
