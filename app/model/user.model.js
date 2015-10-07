(function() {
   'use strict';

    var mongoose = require('mongoose');
    var schema = mongoose.Schema;

    function nameValidator(name) {
        return name === '' || name === undefined;
    };

    // TODO fazer hash na senha

    var user = new schema({
        name: {
            type: String,
            required: true
            //validate: [nameValidator, 'Este nome eh invalido']
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        }
    });

    module.exports = mongoose.model('User', user);
}());