(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var jwt = require('jsonwebtoken');
    var config = require('../config/env.config.json')[process.env.NODE_ENV || 'development'];

    router.use(function(request, response, next) {
        var token = request.body.token || request.query.token || request.headers['x-access-token'];
        var hasToken = token !== null && token !== undefined;
        var isAuthentication = request.originalUrl === "/api/authenticate";

        if (isAuthentication) {
            next();
        } else if (hasToken) {
            jwt.verify(token, config.secret, function(err, decoded) {
                if (err) {
                    return response.status(403).json({message: 'Failed to authenticate token.'});
                } else {
                    request.decoded = decoded;
                    next();
                }
            });
        } else {
            return response.status(403).json({message: 'Token not provided.'});
        }
    });

    router.use(require('../app/route/user.route'));
    router.use(require('../app/route/authenticate.route'));
    router.use(require('../app/route/bug.route'));

    /* GET home page. */
    router.get('/', function(request, response) {
        console.log('get /');
        response.json({
            mensagem: 'Server up and running'
        });
    });

    module.exports = router;
}());