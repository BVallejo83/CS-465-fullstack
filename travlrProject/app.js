const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');
require('./app_server/models/db');

const app = express();
const port = 3000;

// view engine setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set("view engine", "hbs");


// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
const indexRouter = require('./app_server/routes/index');
const travelRouter = require('./app_server/routes/travel');
const apiRouter = require('./app_api/routes/index');

app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});