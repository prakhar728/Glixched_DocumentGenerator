import axios from 'axios';
import getSummary from './getSummary.js';
import dotenv from 'dotenv';
dotenv.config();
const keywordURL = (url)=>{
     axios.get(url).then((res)=>{
         var result = res.data;
         const MeaningCloud_URL = `https://api.meaningcloud.com/summarization-1.0?key=${process.env.MEANINING_CLOUD_KEY}&url=${result.organic_results[0].url}&sentences=6`;
        const Theory = getSummary(MeaningCloud_URL);
         return `${Theory}`;
     },
     (err)=> console.log(err));
}

export default keywordURL;