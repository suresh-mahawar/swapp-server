(function() {
    'use strict';

    var mongoose = require('mongoose');
    var schema = mongoose.Schema;

    /**
     * Schema de User do sistema
     */
    var bug = new schema({
        description: {
            type: String
        },
        user: {
            type: Number
        }
    });

    module.exports = mongoose.model('Bug', bug);
}());