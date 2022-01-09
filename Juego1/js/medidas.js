var medidas = {
    ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    tilesTama: 100,
    tilesEsc: 1,
    tmMedida: function() {
        window.addEventListener('resize', function() {
            medidas.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            medidas.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            console.log(`
            ancho:${medidas.ancho}\n
            alto:${medidas.alto}\n
            `)
        });
    },

    getNumTilesAncho: function() {
        var NewMedidaTiles = this.tilesTama * this.tilesEsc;
        return Math.ceil((this.ancho - NewMedidaTiles) / NewMedidaTiles);

    },
    getNumTilesAlto: function() {
        var NewMedidaTiles = this.tilesTama * this.tilesEsc;
        return Math.ceil((this.alto - NewMedidaTiles) / NewMedidaTiles);

    },
    getNumTilesTotal: function() {
        return medidas.getNumTilesAncho * medidas.getNumTilesAlto;
    },
    dibujarTiles: function() {
        var NewMedidaTiles = this.tilesTama * this.tilesEsc;
        for (var y = 0; y < this.getNumTilesAlto(); y++) {
            for (var x = 0; x < this.getNumTilesAncho(); x++) {
                Hitbox(x * NewMedidaTiles, y * NewMedidaTiles, NewMedidaTiles, NewMedidaTiles);
            }
        }
    }

}