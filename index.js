const express = require('express');
const sessionware = require('express-session');
const exphbs = require('express-handlebars');

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use('/static', express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.render("docs/index.handlebars", {layout: false, name: "Louis"});
});

app.post('/login', (req, res) => {
    res.json({name: req.body.name});
});

app.listen(8080, () => {
    console.log('Server listening on http://localhost:8080');
});