const express = require("express");
const Telemetry = require("../models/Telemetry.model");

const router = express.Router();

//get telemetry for a particular device - remember in the system description the full route is telemetry/:deviceId, but we ommit 'telemetry' since its already covered in the app.js main file which will forward any route with api/telemetry to this handler file

router.get("/:deviceId", async (req, res) => {});

// store a dataset for a particular telemtery - must include the deviceId - you may notice that this route is exaclty equivalent to the get route with the difference of the HTTP method - this is now a POST rather than a get , they have different handler functions

router.post("/create/:deviceId", async (req, res) => {});

module.exports = router;