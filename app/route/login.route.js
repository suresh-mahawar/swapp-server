(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var controller = require('../controller/login.controller');

    var resource = '/login';

    /**
     * Realiza o POST de Resource do Endpoint user.
     *
     * POST /api/login
     */
    router.post(resource, controller.login);

    module.exports = router;
}());