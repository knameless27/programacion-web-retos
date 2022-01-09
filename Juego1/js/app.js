document.addEventListener("DOMContentLoaded", function() {
    medidas.tmMedida();
    var a1 = new Hitbox(0, 90, 100, 100);
    medidas.dibujarTiles();
    teclas.iniciar();
})

var start = document.getElementById("start");
start.addEventListener('click', function() {
    bucle.bucleR();
});

var start = document.getElementById("mostrar");
start.addEventListener('click', function() {
    teclas.mostrarTeclas();
});

window.addEventListener('resize', function() {
    console.log('si');
});

window.addEventListener('resize', function(params) {
    medidas.dibujarTiles();
})