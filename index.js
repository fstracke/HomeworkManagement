const express = require('express');
const bodyParser = require('body-parser');
const sessionware = require('express-session');
const exphbs = require('express-handlebars');
const homeController = require('./controllers');

const PORT = process.env.PORT || 3000;

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use('/static', express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: false }))

app.use(express.json());

app.use(sessionware({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use('/', homeController);

app.listen(8080, () => {
    console.log('Server listening on http://localhost:8080');
});
