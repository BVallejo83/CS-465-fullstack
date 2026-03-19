const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set("view engine", "hbs");


// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
const indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});