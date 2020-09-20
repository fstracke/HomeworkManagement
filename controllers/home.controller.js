const router = require('express').Router();

router.get('/', (req, res) =>{
    res.render('home/index', {name: "Louis", layout: false});
});

router.post('/login', (req, res) => {
    console.log(req.body.name);
    res.json({name: "Fritz"});
});

module.exports = router;