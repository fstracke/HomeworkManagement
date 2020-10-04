const passport = require('passport');
const crypto = require('crypto');
const LocalStrategy = require('passport-local').Strategy;
const sessionware = require('express-session');
const User = require('./models/user');

module.exports = app => {
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        User.get({id}).then((user) => {
            done(null, user);
        }).catch((err)=>{
            done(err.massage);
        });
    });

    passport.use(new LocalStrategy((username, password, done) => {
        const hash = crypto.createHash('sha256').update(password).digest('hex');
        User.get({username, password: hash}).then( user => {
                if(!user){
                    done('user not found!');
                }
                done(null, user);
            }).catch(err => {
                done(err.message);
            });
    }));

    app.use(sessionware({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());
}