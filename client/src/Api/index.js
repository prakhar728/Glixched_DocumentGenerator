import axios from 'axios';

const url = 'http://localhost:5000/templates';

export const fetchTemplate = () => axios.get(url);
export const createTemplate = (newTemplate) => axios.post(url, newTemplate);
