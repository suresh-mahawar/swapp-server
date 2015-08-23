(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var user = require('./user.route');
    var login = require('./login.route');

    /* GET home page. */
    router.get('/', function(request, response) {
        response.json({
            mensagem: 'Servidor rodando =)'
        });
    });

    // recurso para /api/user
    router.use(user);
    router.use(login);

    module.exports = router;
}());