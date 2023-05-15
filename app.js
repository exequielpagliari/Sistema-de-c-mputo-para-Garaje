
/* Se tomará marca, patente, momento de aparcamiento
y ubicación para determinar; al momento de la extracción del mismo,
el monto total, tomando en cuenta la salida del rodado.*/

function Auto(tipo, patente, marca, modelo) {
    this.tipo = tipo,
        this.patente = patente,
        this.marca = marca,
        this.modelo = modelo

}

var estacionamiento = {
    cantidadespacios: 10,
    espacios: [],
    inicioarray() {
        for (let index = 0; index < this.cantidadespacios; index++) {
            this.espacios.push(0)

        }
    },
    agregarAuto() {
        const form = document.getElementsByTagName("form")[0];
        console.log(form[0])
        espacio = form[0].value
        tipo = form[1].value
        patente = form[2].value
        marca = form[3].value
        modelo = form[4].value
        espacio = new Auto(tipo, patente, marca, modelo)
        this.espacios[espacio] = espacio
        console.log(espacio)
        console.log(this.espacios)
    }
}

var monto = 1;
var date = new Date();
console.log(estacionamiento.espacios)



















