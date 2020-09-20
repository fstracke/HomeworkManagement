const router = require('express').Router();
const home = require('./home.controller');

router.get('/', home.actionIndex);

router.post('/login', home.actionLogin);

module.exports = router;