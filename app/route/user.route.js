(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var controller = require('../controller/user.controller');

    var resource = '/user';

    /**
     *
     */
    router.get(resource, function(request, response) {
    });

    /**
     *
     */
    router.get(resource + '/:_id', function(request, response) {
    });

    /**
     *
     */
    router.post(resource, function(request, response) {
        var data = request.body;
        controller.save(data).then(function(result) {
            response.json(result);
        });
    });

    /**
     *
     */
    router.put(resource + '/:_id', function(request, response) {
    });

    module.exports = router;
}());