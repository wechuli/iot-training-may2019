const express = require("express");
const mainRoutes = require("./routes/mainRoutes");
const userRoute = require('./routes/userRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/alldevices", mainRoutes);
app.use('/user',userRoute);

app.use((req, res) => {
    
  res.status(404).json({ error: "Route unavailable" });
});

app.listen(8060, () => {
  console.log("My app has started");
});
