import axios from 'axios';
const keywordURL = (url)=>{
     axios.get(url).then((res)=>{
         var result = res.data;
         return result.organic_results[0].url;
     },
     (err)=> console.log(err));
}

export default keywordURL;