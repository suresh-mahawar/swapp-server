(function() {
    'use strict';

    require('../model/user.model');
    var mongoose = require('mongoose');
    var User = mongoose.model('User');

    /**
     * Consulta o conjunto de user
     * existentes no sistema.
     *
     * @returns {*|Query}
     */
    exports.get = function() {
        return User.find(oneForAll);
    };

    /**
     * Consulta um user especifico do
     * sistema.
     *
     * @param id identificador do user
     * @returns {Query}
     */
    exports.getById = function(id) {
        return User.findById(id, oneForAll);
    };

    /**
     * Cadastra um novo usuario no sistema
     *
     * @param {Object} user que sera cadastrado
     * @returns {*|{method}|Promise}
     */
    exports.save = function(user) {
        var user = new User(user);
        return user.save(oneForAll);
    };

    /**
     * Atualiza um novo usuario no sistema
     *
     * @param id identificador do user
     * @param {Object} user que sera atualizado
     * @returns {Query}
     */
    exports.update = function(id, user) {
        return User.findByIdAndUpdate(id, {$set: user}, {new: true});
    };

    // TODO como melhorar isto
    function oneForAll(err, data) {
        if (err) {
            return err;
        }
        return data;
    };
}());