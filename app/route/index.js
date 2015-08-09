(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var user = require('./user.route');

    /* GET home page. */
    router.get('/', function(request, response) {
        response.json({
            mensagem: 'Servidor rodando =)'
        });
    });

    // recurso para /user
    router.use(user);

    module.exports = router;
}());