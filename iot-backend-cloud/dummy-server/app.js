const express = require("express"),
  morgan = require("morgan"),
  cors = require("cors"),
  helmet = require("helmet"),
  bodyParser = require("body-parser");

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res) => {
  const { temprature, humidity } = req.body;
  console.log(req.body);
  console.log(temprature);
  console.log(humidity);

  res.status(404).json({ error: "No route found" });
});

app.listen(5900, (req, res) => {
  console.info("The app is listening at port 5900");
});
