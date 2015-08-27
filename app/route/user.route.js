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
    router.get(resource, function(request, response) {
        controller.get(response);
    });

    /**
     * Realiza o GET de Resource do Endpoint user.
     *
     * GET /api/user/:id
     */
    router.get(resource + '/:_id', function(request, response) {
        var id = request.params._id;
        controller.getById(id, response);
    });

    /**
     * Realiza o POST de Resource do Endpoint user.
     *
     * POST /api/user
     */
    router.post(resource, function(request, response) {
        var data = request.body;
        controller.save(data, response);
    });

    /**
     * Realiza o PUT de Resource do Endpoint user.
     *
     * PUT /api/user/:id
     */
    router.put(resource + '/:_id', function(request, response) {
        var id = request.params._id;
        var data = request.body;
        controller.update(id, data, response);
    });

    module.exports = router;
}());