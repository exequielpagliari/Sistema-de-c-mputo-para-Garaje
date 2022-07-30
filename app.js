let date, horas, minutos, segundos;
date = new Date();
horas = date.getUTCHours() - 3; 
minutos = date.getUTCMinutes();
segundos = date.getUTCSeconds();


console.log("Hora " + horas);
console.log("Minutos " + minutos);
console.log("Segundos "+ segundos);