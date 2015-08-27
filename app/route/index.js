(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var user = require('./user.route');
    var login = require('./login.route');
    var bug = require('./bug.route');

    /* GET home page. */
    router.get('/', function(request, response) {
        response.json({
            mensagem: 'Servidor rodando =)'
        });
    });

    router.use(user);
    router.use(login);
    router.use(bug);

    module.exports = router;
}());