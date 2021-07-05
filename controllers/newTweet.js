module.exports = (req,res)=>{
    var title =""
    var body = ""
    var image = ""
    const data = req.flash('data')[0];
    
    if(typeof data != "undefined"){
        title = data.username
        body =  data.body
        image = data.image
    }
    if(req.session.userId){
        return res.render('create', {
            errors: req.flash('validationErrors'),
            title: title,
            body:body,
            image: image
        });
    }
    res.redirect('/auth/login');
}