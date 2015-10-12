(function() {
    'use strict';

    var mongoose = require('mongoose');
    var schema = mongoose.Schema;

    var swap = new schema({
        userName: {
            type: String,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        time: {
            type: Date,
            required: true
        }
    });

    module.exports = mongoose.model('Swap', swap);
}());