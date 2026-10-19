let pantalla = document.getElementById("pantalla");

function agregar(valor) {
    pantalla.value = pantalla.value + valor;
}

function limpiar() {
    pantalla.value = "";
}

function calcular() {
    pantalla.value = eval(pantalla.value);
}