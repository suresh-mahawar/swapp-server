(function() {
    'use strict';
    var User = require('../model/user.model');

    exports.getAll = function(request, response) {
        var query = User.find();
        query.exec(function(error, data) {
            response.json(data);
        });
    };

    exports.getById = function(request, response) {
        var id = request.params._id;
        var query = User.findById(id);
        query.exec(function(error, data) {
            response.json(data);
        });
    };

    exports.save = function(request, response) {
        var user = new User(request.body);
        user.save(function(error, data) {
            if (error !== null) {
                response.status(400).json({message: 'Cadastro invalido'});
            }
            response.json(data);
        });
    };

    exports.update = function(request, response) {
        var id = request.params._id;
        var query =  User.findByIdAndUpdate(id, {$set: request.body}, {new: true});
        query.exec(function(error, data) {
            response.json(data);
        });
    };
}());