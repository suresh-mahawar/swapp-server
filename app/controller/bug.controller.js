(function() {
    'use strict';

    require('../model/user.model');
    var mongoose = require('mongoose');
    var User = mongoose.model('Bug');

    /**
     * Consulta o conjunto de user
     * existentes no sistema.
     *
     * @returns {*|Query}
     */
    exports.get = function(response) {
        User.find().then(function(info) {
            response.json(info);
        });
    };

    /**
     * Consulta um user especifico do
     * sistema.
     *
     * @param id identificador do user
     * @returns {Query}
     */
    exports.getById = function(id, response) {
        User.findById(id).then(function(info) {
            response.json(info);
        });
    };

    /**
     * Cadastra um novo usuario no sistema
     *
     * @param {Object} user que sera cadastrado
     * @returns {*|{method}|Promise}
     */
    exports.save = function(user, response) {
        var query = { email: user.email};
        User.findOne(query).then(function(info) {
            if (info == null) {
                user = new User(user);
                user.save().then(function(info) {
                    response.json(info);
                });
            } else {
                response.status(404);
                response.send({mensagem: 'Ja existe usuario com este email'});
            }
        });
    };
}());