let resultado = document.getElementById("texto");
let operazao;
let depasoUno;
let depasoDos;
let operador;
//numeros
const unoN = 1;
const dosN = 2;
const tresN = 3;
const cuatroN = 4;
const cincoN = 5;
const seisN = 6;
const sieteN = 7;
const ochoN = 8;
const nueveN = 9;
const ceroN = 0;
//operadores
const masT = "+";
const menosT = "-";
const multiplicazaoT = "*";
const divizaoT = "/";
//botones
const ceroBt = document.getElementById('cero');
const unoBt = document.getElementById('uno');
const dosBt = document.getElementById('dos');
const tresBt = document.getElementById('tres');
const cuatroBt = document.getElementById('cuatro');
const cincoBt = document.getElementById('cinco');
const seisBt = document.getElementById('seis');
const sieteBt = document.getElementById('siete');
const ochoBt = document.getElementById('ocho');
const nueveBt = document.getElementById('nueve');
const se = document.getElementById("C")
    //+
const sum = document.getElementById('mas');
const men = document.getElementById('menos');
const multiplicazao = document.getElementById('multiplicacion');
const divisao = document.getElementById('division');
const resultao = document.getElementById('igual');

function majtejto0() {
    resultado.innerHTML = resultado.innerHTML + "0";
}

function majtejto1() {
    resultado.innerHTML = resultado.innerHTML + "1";
}

function majtejto2() {
    resultado.innerHTML = resultado.innerHTML + "2";
}

function majtejto3() {
    resultado.innerHTML = resultado.innerHTML + "3";
}

function majtejto4() {
    resultado.innerHTML = resultado.innerHTML + "4";
}

function majtejto5() {
    resultado.innerHTML = resultado.innerHTML + "5";
}

function majtejto6() {
    resultado.innerHTML = resultado.innerHTML + "6";
}

function majtejto7() {
    resultado.innerHTML = resultado.innerHTML + "7";
}

function majtejto8() {
    resultado.innerHTML = resultado.innerHTML + "8";
}

function majtejto9() {
    resultado.innerHTML = resultado.innerHTML + "9";
}

function suma() {
    depasoUno = resultado.innerHTML;
    resultado.innerHTML = "";
    operador = "+";
}

function resta() {
    depasoUno = resultado.innerHTML;
    resultado.innerHTML = "";
    operador = "-";
}

function multi() {
    depasoUno = resultado.innerHTML;
    resultado.innerHTML = "";
    operador = "*";
}

function divi() {
    depasoUno = resultado.innerHTML;
    resultado.innerHTML = "";
    operador = "/";
}

function resul() {
    depasoDos = resultado.innerHTML;
    switch (operador) {
        case "+":
            operazao = parseFloat(depasoUno) + parseFloat(depasoDos);
            break;
        case "-":
            operazao = parseFloat(depasoUno) - parseFloat(depasoDos);
            break;
        case "*":
            operazao = parseFloat(depasoUno) * parseFloat(depasoDos);
            break;
        case "/":
            operazao = parseFloat(depasoUno) / parseFloat(depasoDos);
            break;
        default:
            break;
    }
    resultado.innerHTML = operazao;
}

function sexd() {
    location.reload();
}

ceroBt.addEventListener("click", majtejto0, true);
unoBt.addEventListener("click", majtejto1, true);
dosBt.addEventListener("click", majtejto2, true);
tresBt.addEventListener("click", majtejto3, true);
cuatroBt.addEventListener("click", majtejto4, true);
cincoBt.addEventListener("click", majtejto5, true);
seisBt.addEventListener("click", majtejto6, true);
sieteBt.addEventListener("click", majtejto7, true);
ochoBt.addEventListener("click", majtejto8, true);
nueveBt.addEventListener("click", majtejto9, true);

sum.addEventListener("click", suma, true);
men.addEventListener("click", resta, true);
divisao.addEventListener("click", divi, true);
resultao.addEventListener("click", resul, true);
multiplicazao.addEventListener("click", multi, true);
se.addEventListener("click", sexd, true);