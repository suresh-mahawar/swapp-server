(function() {
    'use strict';

    require('../model/user.model');
    var mongoose = require('mongoose');
    var User = mongoose.model('User');

    exports.login = function(request, response) {
      response.json({'mensagem': 123});
    };
}());