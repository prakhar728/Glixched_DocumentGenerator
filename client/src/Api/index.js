import axios from 'axios';

const url = 'http://localhost:5000/templates';

const fetchTemplate = () => axios.get(url);
 const createTemp = (newTemplate) => axios.post(url, newTemplate);
 export default createTemp;
