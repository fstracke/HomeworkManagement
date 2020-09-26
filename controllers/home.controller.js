module.exports = {
    actionIndex: (req, res) =>{
        req.session['page_views']=1
        res.render('home/index', {name: "Louis", layout: false});
    },
    actionLogin: (req, res) => {
        res.render('login/index', {layout: false});
    },
    actionRegister: (req, res) => {
        res.render('home/index', {layout: false, user: req.user, currentRegister: req.params.register, register: [{link: "/schule", title: "Schule"}]})
    }
}