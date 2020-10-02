const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const sessionware = require('express-session');

module.exports = app => {
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        const user = {
            id: id,
            username: "fstracke",
            name: "Stracke"
        };
        done(null, user);
    });

    passport.use(new LocalStrategy((username, password, done) => {
        if (username === 'fstracke' && password === 'test'){
            done(null, {
                id: '1',
                username: 'fstracke',
                name: 'Stracke'
            });
        } else {
            done('Not allowed');
        }
    }));

    app.use(sessionware({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());
}