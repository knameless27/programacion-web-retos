document.addEventListener("DOMContentLoaded", function() {
    medidas.tmMedida();
    var a1 = new Hitbox(0, 90, 100, 100);
})

var start = document.getElementById("start");
start.addEventListener('click', function() {
    bucle.bucleR();
});

window.addEventListener('resize', function() {
    console.log('si');
});