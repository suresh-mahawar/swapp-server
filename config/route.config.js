(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();

    router.use(require('../app/route/user.route'));
    router.use(require('../app/route/login.route'));
    router.use(require('../app/route/bug.route'));

    /* GET home page. */
    router.get('/', function(request, response) {
        response.json({
            mensagem: 'Server up and running'
        });
    });

    module.exports = router;
}());