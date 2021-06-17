import axios from "axios";
import {saveAs} from 'file-saver';
const url = "http://localhost:5000/templates";

const fetchTemp = () => {
  axios.get(url, { responseType: "blob" })
  .then((res)=>{
      const pdfBlob = new Blob([res.data],{type:'application/pdf'});
      saveAs(pdfBlob,'newPdf.pdf');
  });
};
const createTemplate = (newTemplate) => axios.post(url, newTemplate);

export { fetchTemp, createTemplate };
