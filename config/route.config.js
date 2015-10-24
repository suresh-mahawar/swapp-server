(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var jwt = require('jsonwebtoken');
    var config = require('../config/env.config.json')[process.env.NODE_ENV || 'development'];

    router.use(function(request, response, next) {
        var token = request.body.token || request.query.token || request.headers['x-access-token'];

        var hasToken = token !== null && token !== undefined;
        var isAuthentication = request.originalUrl === "/api/authenticate/login";
        var isCreatingUser = request.url === "/user" && request.method === "POST";

        if (isAuthentication || isCreatingUser) {
            next();
        } else if (hasToken) {
            jwt.verify(token, config.secret, function(err, decoded) {
                if (err) {
                    return response.status(403).json({message: 'Failed to authenticate token.'});
                } else {
                    request.body.user = decoded._id;
                    request.body.userName = decoded.name;
                    request.body.userEmail = decoded.email;
                    next();
                }
            });
        } else {
            return response.status(403).json({message: 'Token not provided.'});
        }
    });

    router.use(require('../app/controller/user.controller'));
    router.use(require('../app/controller/authenticate.controller'));
    router.use(require('../app/controller/bug.controller'));
    router.use(require('../app/controller/swap.controller'));

    /* GET home page. */
    router.get('/', function(request, response) {
        response.json({
            mensagem: 'Server up and running'
        });
    });

    module.exports = router;
}());