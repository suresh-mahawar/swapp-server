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
    exports.login = function(data, response) {
        var query = {
            $and: [{email: data.email}
                , {password: data.password}
            ]
        };
        User.findOne(query).then(function(info) {
            if (info == null) {
                response.status(404);
                response.json({mensagem: 'Autenticaçao Incorreta'});
            } else {
                // TODO token
                response.json(info);
            }
        });
    };

    // TODO como melhorar isto
    function oneForAll(err, data) {
        if (err) {
            return err;
        }
        return data;
    };
}());