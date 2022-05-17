var cantidad = "";
/*var sumatoria = 0;
var restario = 0;
var restar = false;
var multiplicar = false;
var dividir = false;
var porcen=false;*/
var cosenoo = false;
/*var sumar = false;*/
var mostrar;
var log;
var senoo;
var tangente;
var elevadoo = 0;
var ecuaciones = false;


function mostrar_numero(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}

function borrar() {
    document.getElementById("display").value = "";
    cantidad = "";
}

function operaciones() {
    mostrar = eval(cantidad)
    document.getElementById("display").value = mostrar;
    ecuaciones = true;
}

function logaritmo() {
    if (ecuaciones == true) {
        log = Math.log2(mostrar);
        document.getElementById("display").value = log
    } else {
        log = Math.log2(cantidad);
        document.getElementById("display").value = log;
    }

}

function logaritmo10() {
    if (ecuaciones == true) {
        log = Math.log10(mostrar);
        document.getElementById("display").value = log;
    } else {
        log = Math.log10(cantidad);
        document.getElementById("display").value = log;
    }

}

function seno() {
    if (ecuaciones == true) {
        senoo = Math.sin(mostrar);
        document.getElementById("display").value = senoo;
    } else {
        senoo = Math.sin(cantidad);
        document.getElementById("display").value = senoo;
    }

}


function elevado2() {
    if (ecuaciones == true) {
        elevadoo = (elevadoo + parseInt(mostrar)) * mostrar;
        document.getElementById("display").value = elevadoo;
    } else {
        elevadoo = (elevadoo + parseInt(cantidad)) * cantidad;
        document.getElementById("display").value = elevadoo;
        cantidad = "";
    }

}

function coseno() {
    if (ecuaciones == true) {
        cosenoo = Math.cos(mostrar);
        document.getElementById("display").value = cosenoo;
    } else {
        cosenoo = Math.cos(cantidad)
        document.getElementById("display").value = cosenoo;
        cantidad = "";
    }

}

function elevado3() {
    if (ecuaciones == true) {
        elevadoo = (elevadoo + parseInt(mostrar)) * mostrar * mostrar;
        document.getElementById("display").value = elevadoo;
    } else {
        elevadoo = (elevadoo + parseInt(cantidad)) * cantidad * cantidad;
        document.getElementById("display").value = elevadoo;
    }

}