var bucle = {
    id: null,
    fin: 0,
    aps: 0,
    fps: 0,
    bucleR: function(tiempo) {
        bucle.id = window.requestAnimationFrame(bucle.bucleR);
        bucle.actualizar();
        bucle.refrescar();
        var diferencia = tiempo - bucle.fin;
        if (diferencia > 999) {
            console.log(`
            fin=${bucle.fin}\n
            tiempo=${tiempo}\n
            diferencia=${diferencia}\n
            aps=${bucle.aps}\n
            fps=${bucle.fps}\n
            id=${bucle.id}\n
            `)
            bucle.fin = tiempo;
            bucle.fps = 0;
            bucle.aps = 0;
        }
    },
    actualizar: function() {
        bucle.aps++;
    },
    refrescar: function() {
        bucle.fps++;
    }
}