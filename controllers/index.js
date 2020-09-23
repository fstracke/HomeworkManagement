const express = require('express');
const router = express.Router();
const home = require('./home.controller');
const passport = require('passport');

router.get('/', home.actionIndex);

router.get('/login', home.actionLogin);

router.post('/login/auth', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
    res.redirect('/');
});

module.exports = router;