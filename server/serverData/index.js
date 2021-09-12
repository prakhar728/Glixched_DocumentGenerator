import dotenv from "dotenv";
import getKeyUrl from "./keyWordUrl.js";
dotenv.config();
const getTheory = (keyword) => {
  const SERP_URL = `http://api.serpstack.com/search?access_key=${process.env.SERPSTACK_KEY}&query=${keyword}wikipedia`;
  const Theory = getKeyUrl(SERP_URL);
  return `${Theory}`;
};
export default getTheory;
