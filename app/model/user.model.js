(function() {
   'use strict';

    var mongoose = require('mongoose');
    var schema = mongoose.Schema;

    /**
     * Schema de User do sistema
     */
    var user = new schema({
        name: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    });

    module.exports = mongoose.model('User', user);
}());