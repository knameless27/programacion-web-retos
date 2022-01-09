function Tiempo() {
    let taim = new Date();
    var year = taim.getFullYear();
    var month = taim.getMonth();
    var day = taim.getDate();
    var hours = taim.getHours();
    var minutes = taim.getMinutes();
    var seconds = taim.getSeconds();

    minutes = check(minutes);
    seconds = check(seconds);
    document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds;
    var time = setTimeout(function() { Tiempo() }, 1);

    document.getElementById('date').innerHTML = year + "/" + (month + 1) + "/" + day;
}

function check(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}