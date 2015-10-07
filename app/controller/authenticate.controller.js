(function() {
    'use strict';

    var jwt = require('jsonwebtoken');
    var User = require('../model/user.model');
    var config = require('../../config/env.config.json')[process.env.NODE_ENV || 'development'];

    exports.authenticate = function(request, response) {
        var email = request.body.email;
        var password = request.body.password;
        var query = User.findOne({
            email: email
        });

        query.exec(function(error, data) {
            if (!data) {
                response.json({message: 'Authentication failed'});
            } else {
                if (data.password !== password) {
                    response.json({message: 'Wrong password'});
                } else {
                    var token = jwt.sign(data, config.secret, {
                        expiresIn: 1440 // 24 hours
                    });
                    response.json({token: token});
                }
            }
        });
    };
}());