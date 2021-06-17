import  {fetchTemp, createTemplate} from '../Api/index.js';
 const createTemp= async (template)=>{
 createTemplate(template);
}
const fetchTemplate = ()=>{
    console.log("Fetching the Template");
}
export {createTemp,fetchTemplate};