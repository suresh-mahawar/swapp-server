(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var controller = require('../controller/user.controller');

    var resource = '/user';

    /**
     * Realiza o GET de Collection do Endpoint user.
     *
     * GET /api/user
     */
    router.get(resource, controller.getAll);

    /**
     * Realiza o GET de Resource do Endpoint user.
     *
     * GET /api/user/:id
     */
    router.get(resource + '/:_id', controller.getById);

    /**
     * Realiza o POST de Resource do Endpoint user.
     *
     * POST /api/user
     */
    router.post(resource, controller.save);

    /**
     * Realiza o PUT de Resource do Endpoint user.
     *
     * PUT /api/user/:id
     */
    router.put(resource + '/:_id', controller.update);

    module.exports = router;
}());