const axios = require("axios");

const MAXIMUM_TEMP = 30;
const MINIMUM_TEMP = 20;
const MAXIMUM_HUMIDITY = 100;
const MINIMUM_HUMIDITY = 10;


function dummyDevice() {
    const randomTemp = 25;
    const randomHumi = 24;
//   console.log("Strange stuff");
  axios
    .post("http://un-habitat-backend.azurewebsites.net", { temp: randomTemp, humidity: randomHumi })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}



setInterval(() => {
  dummyDevice();
}, 3000);


