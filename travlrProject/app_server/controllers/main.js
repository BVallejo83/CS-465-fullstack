exports.home = function(req, res) {
    res.render('index', {
        title: 'Travlr Getaways',
        message: 'Welcome to the Travlr MVC Application'
    });
};