let date, horas, minutos, segundos, diaactual, mesactual, añoactual;
let patente = prompt("Ingrese Patente"), color = prompt("Ingrese Color"), marca = prompt("Ingrese Marca"), modelo = prompt("Ingrese Modelo"), dia, mes, año, tarifa;
let espacios = [];
let vehiculos = []
let cantidadespacios = 20
let datosdevículos = cantidadespacios * 7;
date = new Date();
horas = date.getUTCHours() - 3; 
minutos = date.getUTCMinutes();
segundos = date.getUTCSeconds();
diaactual = date.getDay();
mesactual = date.getMonth();
añoactual = date.getFullYear();

for (let index = 0; index < cantidadespacios; index++) {
    espacios.push(0);     
}

for (let index = 0; index < datosdevículos; index++) {
    espacios.push(0);     
}

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

console.log("Hora " + horas);
console.log("Minutos " + minutos);
console.log("Segundos "+ segundos);


let auto = [];
date = new Date();
horas = date.getUTCHours() - 3; 
minutos = date.getUTCMinutes();
segundos = date.getUTCSeconds();
diaactual = date.getUTCDate();
mesactual = date.getUTCMonth() + 1;
añoactual = date.getUTCFullYear();
auto.push(patente,color,marca,modelo,horas,minutos,segundos,diaactual,mesactual,añoactual);
console.log(auto)
