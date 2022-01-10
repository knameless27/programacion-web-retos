var ajax = {
    carga: function(ruta) {
        fetch(ruta)
            .then(function(respuesta) {
                return respuesta.text();
            }).then(function(data) {
                console.log(JSON.parse(data));
            }).catch(function(err) {
                console.error(err);
            });
    }
}

ajax.carga("assets/mapa1.json");