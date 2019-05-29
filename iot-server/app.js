const express = require("express");
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const mainRoutes = require("./routes/mainRoutes");
const userRoute = require('./routes/userRoutes')

const app = express();

//middleware to handle json
app.use(express.json());
//middleware to handle encoded data in the url
app.use(express.urlencoded({ extended: false }));

//the helmet middleware sets some basic security settings to secure our application, we will use the basic settings
app.use(helmet());

//cors middleware allows our application to be accessed by other 

app.use("/alldevices", mainRoutes);
app.use('/user',userRoute);

app.use((req, res) => {
    
  res.status(404).json({ error: "Route unavailable" });
});

app.listen(8060, () => {
  console.log("My app has started");
});
