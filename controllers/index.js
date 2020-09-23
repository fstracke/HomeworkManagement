const express = require('express')
const router = express.Router();
const home = require('./home.controller');

router.get('/', home.actionIndex);

router.get('/login', home.actionLogin);

module.exports = router;