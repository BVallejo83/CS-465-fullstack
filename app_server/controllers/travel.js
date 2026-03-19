const travel = (req, res) => {
    res.render('travel', {
        title: 'Travel Page',
        message: 'Welcome to the travel section of the Travlr site.'
    });
};

module.exports = {
    travel
};