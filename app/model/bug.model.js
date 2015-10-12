(function() {
    'use strict';

    var mongoose = require('mongoose');
    var schema = mongoose.Schema;

    /**
     * Schema de User do sistema
     */
    var bug = new schema({
        tipo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    });

    module.exports = mongoose.model('Bug', bug);
}());
