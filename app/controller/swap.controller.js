(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var controller = require('../service/swap.service');

    var resource = '/swap';

    /**
     * Realiza o POST de Resource do Endpoint user.
     *
     * POST /api/user
     */
    router.post(resource, controller.save);

    router.get(resource, controller.getAll);

    module.exports = router;
}());