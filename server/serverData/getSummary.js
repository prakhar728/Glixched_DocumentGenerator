import axios from "axios";
const getSummary = (url) =>{
    console.log(`The Url for summary is ${url}`);
    axios.get(url).then((res)=>{
        var result = res.data;
        console.log(result["summary"]);
        return result["summary"];
    },(err)=> {console.log(err);
    return `Error upcoming so no theory`}
    
    );
    
}
export default getSummary;