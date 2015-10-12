(function() {
    'use strict';

    var Bug = require('../model/bug.model');

    exports.getAll = function(request, response) {
        var query = Bug.find();
        query.exec(function(error, data) {
            response.json(data);
        });
    };

    exports.getById = function(request, response) {
        var id = request.params._id;
        var query = Bug.findById(id);
        query.exec(function(error, data) {
            response.json(data);
        });
    };

    exports.save = function(request, response) {
        var bug = new Bug(request.body);
        bug.save(function(error, data) {
            response.json(data);
        });
    };
}());