const express = require("express");
const User = require("../models/User.model");

const router = express.Router();
//I have explained most of the syntax in the telemetryRoutes file, there is nothing different here, just additional routes

//create a new user
router.post("/createnewuser", async (req, res) => {

});

//get all users in the system
router.get("/getallusers", async (req, res) => {
  
});

module.exports = router;
