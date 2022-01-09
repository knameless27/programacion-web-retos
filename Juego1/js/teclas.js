var teclas = {
    arregloKey: new Array(),
    iniciar: function() {
        document.onkeydown = teclas.saveKeys;
    },
    saveKeys: function(e) {
        teclas.arregloKey.push(e.key);
        console.log(e.key);
    },
    teclaPulsada: function(CodLetra) {
        return (this.arregloKey.indexOf(CodLetra)) ? true : false;
    },
    borrarTeclas: function() {
        teclas.arregloKey = new Array();
    },
    mostrarTeclas: function() {
        console.log(this.arregloKey);
    }
}