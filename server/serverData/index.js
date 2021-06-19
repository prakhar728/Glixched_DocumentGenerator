import dotenv from "dotenv";
import getKeyUrl from "./keyWordUrl.js";
import sleep from 'sleep-promise';
4;
import getSummary from "./getSummary.js";
dotenv.config();
const getTheory = (keyword) => {
  const SERP_URL = `http://api.serpstack.com/search?access_key=${process.env.SERPSTACK_KEY}&query=${keyword}wikipedia`;
  const searchURL = getKeyUrl(SERP_URL);
  const MeaningCloud_URL = `https://api.meaningcloud.com/summarization-1.0?key=${process.env.MEANINING_CLOUD_KEY}&url=${searchURL}`;
  const Theory = getSummary(MeaningCloud_URL);
  return `${Theory}`;
};
export default getTheory;
