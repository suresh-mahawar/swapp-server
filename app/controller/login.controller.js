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
    exports.login = function(data) {
        console.log('data', data);
        var query = {$and: [
            {'email': data.email}
            , {'password': data.password}
        ]};
        return User.findOne(query, oneForAll);
    };

    // TODO como melhorar isto
    function oneForAll(err, data) {
        if (err) {
            return err;
        }
        return data;
    };
}());