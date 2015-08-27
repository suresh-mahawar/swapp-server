(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var controller = require('../controller/bug.controller');

    var resource = '/bug';

    router.get(resource, function(request, response) {
        controller.get(response);
    });

    router.get(resource + '/:_id', function(request, response) {
        var id = request.params._id;
        controller.getById(id, response);
    });

    router.post(resource, function(request, response) {
        var data = request.body;
        controller.save(data, response);
    });

    module.exports = router;
}());