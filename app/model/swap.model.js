(function() {
    'use strict';

    var mongoose = require('mongoose');
    var schema = mongoose.Schema;

    var swap = new schema({
        name: {
            type: String,
            required: true
        }
    });

    module.exports = mongoose.model('Swap', swap);
}());