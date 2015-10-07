(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var controller = require('../controller/authenticate.controller');

    var resource = '/authenticate';

    /**
     * Realiza o POST de Resource do Endpoint user.
     *
     * POST /api/login
     */
    router.post(resource + '/login', controller.authenticate);

    router.post(resource + '/logout', controller.logout);

    module.exports = router;
}());