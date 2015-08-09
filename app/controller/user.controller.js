(function() {
    'use strict';

    require('../model/user.model');
    var mongoose = require('mongoose');
    var User = mongoose.model('User');

    var controller = {};

    controller.get = function() {

    };

    controller.getByID = function(id) {
    };

    controller.save = function(user) {
        var user = new User(user);
        return user.save(function(err, data) {
            if (err) {
                return err;
            }
            return data;
        });
    };

    controller.update = function(user) {

    };

    module.exports = controller;
}());