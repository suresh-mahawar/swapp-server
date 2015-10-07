(function () {
    'use strict';

    var express = require('express');
    var path = require('path');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');

    var app = express();

    var config = require('./config/env.config.json')[process.env.NODE_ENV || 'development'];
    var routes = require('./config/route.config');
    var db = require('./config/db.config');

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../client')));

    app.use('/api', routes);
    app.set('port', config.PORT);
    db.init(config.MONGO_URI);

    var server = app.listen(app.get('port'), function () {
        console.log('Express server listening on port ' + server.address().port);
    });

    module.exports = app;
}());