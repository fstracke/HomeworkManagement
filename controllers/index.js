const express = require('express');
const router = express.Router();
const home = require('./home.controller');
const passport = require('passport');
const ensureLogin = require('connect-ensure-login');

router.get('/', home.actionIndex);

router.get('/login', home.actionLogin);

router.post('/login/auth', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
    res.redirect('/schule');
});

router.get('/:register', ensureLogin.ensureLoggedIn(), home.actionRegister);

module.exports = router;