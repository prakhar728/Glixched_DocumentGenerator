import  {fetchTemp, createTemplate} from '../Api/index.js';
 const createTemp= async (template)=>{
 createTemplate(template);
}
const fetchTemplate = ()=>{
    fetchTemp();
}
export {createTemp,fetchTemplate};