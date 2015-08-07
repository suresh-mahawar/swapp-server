(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();

    /* GET home page. */
    router.get('/', function(request, response) {
        response.json({
            mensagem: 'Servidor rodando =)'
        });
    });

    module.exports = router;
}());