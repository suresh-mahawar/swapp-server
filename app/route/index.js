(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var user = require('./user.route');
    var login = require('./login.route');
    var bug = require('./bug.route');

    router.use(user);
    router.use(login);
    router.use(bug);

    /* GET home page. */
    router.get('/', function(request, response) {
        response.json({
            mensagem: 'Servidor rodando =)'
        });
    });

    module.exports = router;
}());