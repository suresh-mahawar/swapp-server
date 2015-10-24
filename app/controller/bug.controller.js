(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var controller = require('../service/bug.service');

    var resource = '/bug';

    router.get(resource, controller.getAll);

    router.get(resource + '/:_id', controller.getById);

    router.post(resource, controller.save);

    module.exports = router;
}());