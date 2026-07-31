const express = require('express');
const controller = require('../controllers/stats.controller');
const router = express.Router();


router.use("/", controller.getStats);


module.exports = router;