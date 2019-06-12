const credentials = {
  apiKey: "cc4cac8b3ff70b6bd906ee38a6eac36804ccc8ca692509505119e8e7cdc69538",
  username: "iotstrath"
};

const AfricasTalking = require("africastalking")(credentials);

//Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage(number, message) {
  const options = {
    //Set the numbers that you want to send to in international format
    to: [`+254${number}`],
    //Set the message
    message
    //Set your shortcode or senderID
    // from: 'Wechuli'
  };

  //That's it, hit send and we'll handle the rest

  sms
    .send(options)
    .then(response => {
      console.log(response);
      
    })
    .catch(error => {
      console.log(error);
    });
}

sendMessage(701782846, "Hi there");
