(function() {
    'use strict';

    var User = require('../model/user.model');

    exports.login = function(request, response) {
      response.json({'mensagem': 123});
    };
}());