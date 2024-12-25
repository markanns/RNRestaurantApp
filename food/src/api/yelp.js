import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer QwAp_TNzIMNSznDhdHO2SYOP6THoeqeB5bOFSUN41-L-h2Ng8UkTdtjgEXmyMsUWnRk8A3e-cl92frCo693Y63iywEetJgYUntHTtSTXF4ZCQ4k98N-V-rWRicxVZ3Yx",
  },
});
