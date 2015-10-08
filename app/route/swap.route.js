(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var controller = require('../controller/swap.controller');

    var resource = '/swap';

    /**
     * Realiza o POST de Resource do Endpoint user.
     *
     * POST /api/user
     */
    router.post(resource, controller.save);

    module.exports = router;
}());