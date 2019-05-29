const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hurray, you are successfull" });
});

router.get("/strange", (req, res) => {
  res
    .status(200)
    .json({ message: "Hurray, you are successfull, this is a strange route" });
});

module.exports = router;
