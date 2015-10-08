(function() {
    'use strict';
    var Swap = require('../model/swap.model');

    // TODO

    // ir para pagina principal se estiver logado
    // mensagem para ligar o gps
    // interceptador no lado cliente para o token
    // adicionar endpoint /swap
    // verificar rota do mapa

    exports.save = function(request, response) {
        var swap = new Swap(request.body);
        console.log('user', request.decoded);
        swap.save(function(error, data) {
            response.json(data);
        });
    };

}());