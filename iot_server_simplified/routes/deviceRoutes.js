const express = require("express");
const Device = require('../models/Device.model');


const router = express.Router();
//I have explained most of the syntax in the telemetryRoutes file, there is nothing different here, just additional routes

//create a new device
router.post("/createnewdevice", async(req,res)=>{

});

//get all devices in the system
router.get("/getalldevices", async (req,res)=>{
  
});



module.exports = router;
