(function() {
    'use strict';

    module.exports.init = function(config) {
        var mongoose = require('mongoose');

        mongoose.connect(config.MONGO_URI);
        var db = mongoose.connection;

        db.on('error', function callback () {
            console.log("Connection error");
        });

        db.once('open', function callback () {
            console.log("Mongo working! At db", db.name);
        });
    };
})();