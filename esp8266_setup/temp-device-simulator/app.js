const Axios = require("axios");

const MAXIMUM_TEMP = 30;
const MINIMUM_TEMP = 20;

async function postRandomTemp() {
  const randomTemp =
    Math.floor(Math.random() * (MAXIMUM_TEMP - MINIMUM_TEMP + 1)) +
    MINIMUM_TEMP;
  const response = await Axios.post();
}
