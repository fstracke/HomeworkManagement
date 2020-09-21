const express = require('express')
const router = express.Router();
const home = require('./home.controller');

router.get('/', home.actionIndex);

router.post('/login', express.urlencoded({ extended: true }), (req, res) => {
    console.log(req.body);
    res.json(null);
});

module.exports = router;