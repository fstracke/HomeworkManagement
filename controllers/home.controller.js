module.exports = {
    actionIndex: (req, res) =>{
        res.render('home/index', {name: "Louis", layout: false});
    },
    actionLogin: (req, res) => {
        console.log(req.body.name);
        res.json({name: ""});
    }
}