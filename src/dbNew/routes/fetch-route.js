const express = require("express");
const fetchController = require("../controller/fetch-controller");
const router = express.Router();
const userController = require("../controller/fetch-controller");
router.post("/fetch-data", fetchController.fetchData);
module.exports = router;
