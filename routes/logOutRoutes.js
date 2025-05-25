const express = require('express')
const router = express.Router();
const logOutController = require('../controllers/logOutController');

router.get('/logout', logOutController.logout);

module.exports = router;