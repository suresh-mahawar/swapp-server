(function() {
    'use strict';
    var Swap = require('../model/swap.model');

    exports.save = function(request, response) {
        var swap = new Swap(request.body);
        swap.save(function(error, data) {
            response.json(data);
        });
    };

    exports.getAll = function(request, response) {
        var query = Swap.find();
        query.exec(function(error, data) {
            response.json(data);
        });
    };

}());