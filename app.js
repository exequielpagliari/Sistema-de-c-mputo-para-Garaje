let date, horas, minutos, segundos;
let patente, color, marca, modelo, dia, mes, año, tarifa;
let espacios = [];
let vehiculos = []
let cantidadespacios = 20
let datosdevículos = cantidadespacios * 7;
date = new Date();
horas = date.getUTCHours() - 3; 
minutos = date.getUTCMinutes();
segundos = date.getUTCSeconds();

for (let index = 0; index < cantidadespacios; index++) {
    espacios.push(0);     
}

for (let index = 0; index < datosdevículos; index++) {
    espacios.push(0);     
}



console.log("Hora " + horas);
console.log("Minutos " + minutos);
console.log("Segundos "+ segundos);
console.log(espacios)
