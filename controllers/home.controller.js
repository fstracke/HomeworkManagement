module.exports = {
    actionIndex: (req, res) =>{
        res.render('home/index', {name: "Louis", layout: false});
    },
    actionLogin: (req, res) => {
        console.log(req.body);
        res.json({name: req.body.name});
    }
}