(function() {
    'use strict';

    require('../model/bug.model');
    var mongoose = require('mongoose');
    var Bug = mongoose.model('Bug');

    exports.get = function(response) {
        Bug.find().then(function(info) {
            response.json(info);
        });
    };

    exports.getById = function(id, response) {
        Bug.findById(id).then(function(info) {
            response.json(info);
        });
    };

    exports.save = function(bug, response) {
        bug = new Bug(bug);
        bug.save().then(function(info) {
            response.json(info);
        });
    };
}());