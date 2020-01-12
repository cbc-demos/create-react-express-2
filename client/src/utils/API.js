import axios from 'axios';

export const getUserById = id => axios.get(`/api/users/${id}`);
