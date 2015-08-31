(function () {
    'use strict';

    var express = require('express');
    var path = require('path');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');

    var routes = require('./app/route/index');

    var app = express();

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());

    app.use(express.static(path.join(__dirname, '../client')));

    app.use('/api', routes);

    app.set('port', process.env.PORT || 8080);

    var mongoose = require('mongoose');


   // mongoose.connect('mongodb://localhost/swapp');
    mongoose.connect('mongodb://admin:admin@ds035603.mongolab.com:35603/swapp');
    var db = mongoose.connection;

    var server = app.listen(app.get('port'), function () {
        console.log('Express server listening on port ' + server.address().port);
    });

    db.on('error', function callback () {
        console.log("Connection error");
    });

    db.once('open', function callback () {
        console.log("Mongo working! At db", db.name);
    });
    module.exports = app;
}());
