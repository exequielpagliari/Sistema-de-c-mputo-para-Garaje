let date, horas, minutos, segundos, diaactual, mesactual, añoactual;
let espacios = [];
let vehiculos = []
let auto = [];
let cantidadespacios = 20
let datosdevículos = cantidadespacios * 7;
date = new Date();
horas = date.getUTCHours() - 3; 
minutos = date.getUTCMinutes();
segundos = date.getUTCSeconds();
diaactual = date.getDay();
mesactual = date.getMonth();
añoactual = date.getFullYear();


for (let index = 0; index < datosdevículos; index++) {
    espacios.push(0);     
}

for (let index = 0; index < 10; index++) {
    espacios.push(0);     
}

inicio();

/*if (espacios[0] === 0) {
    let auto = [];
    let patente = AA001002A;
    let color = rojo;
    let marca = Volkswagen;
    let modelo = Bora;
    date = new Date();
    horas = date.getUTCHours() - 3; 
    minutos = date.getUTCMinutes();
    segundos = date.getUTCSeconds();
}
*/





function ingresoauto(){
    let ubicacion = Number(prompt("Ingrese Ubicación"));
    let patente = prompt("Ingrese Patente"), color = prompt("Ingrese Color"), marca = prompt("Ingrese Marca"), modelo = prompt("Ingrese Modelo"), dia, mes, año, tarifa;
    
    date = new Date();
    horas = date.getUTCHours() - 3; 
    minutos = date.getUTCMinutes();
    segundos = date.getUTCSeconds();
    diaactual = date.getUTCDate();
    mesactual = date.getUTCMonth() + 1;
    añoactual = date.getUTCFullYear();
    auto.push(ubicacion,patente,color,marca,modelo,horas,minutos,segundos,diaactual,mesactual,añoactual);
    console.log(auto)
    puntero = 1

    for (let index = ubicacion - 1; index < ubicacion + 9; index++) {
        espacios[index] = auto[puntero];
        puntero = puntero + 1;}
    puntero = 1
    console.log(espacios)
    inicio()

}

function saleauto(){
    let ubicacion = Number(prompt("Ingrese Ubicación"));
    let tarifa = prompt("Ingrese Tarifa")
    date = new Date();
    horas = date.getUTCHours() - 3; 
    minutos = date.getUTCMinutes();
    segundos = date.getUTCSeconds();
    diaactual = date.getUTCDate();
    mesactual = date.getUTCMonth() + 1;
    añoactual = date.getUTCFullYear();

    for (let index = ubicacion -1; index < ubicacion + 9; index++) {
    console.log(espacios[index]);}
    inicio()
}




function inicio(){
let accion = prompt("Ingrese Acción");
if (accion == "Entra"){
    ingresoauto()
} 

if (accion == "Sale"){
    saleauto();
}
}

