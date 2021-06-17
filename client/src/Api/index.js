import axios from 'axios';

const url = 'http://localhost:5000/templates';

 const fetchTemp = () => axios.get(url);
 const createTemplate = (newTemplate) => axios.post(url, newTemplate);

 export {fetchTemp, createTemplate};