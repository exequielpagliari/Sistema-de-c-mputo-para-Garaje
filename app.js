
/* Se tomará marca, patente, momento de aparcamiento
y ubicación para determinar; al momento de la extracción del mismo,
el monto total, tomando en cuenta la salida del rodado.*/

function Auto(tipo, patente, marca, modelo, tiempo) {
    this.tipo = tipo,
        this.patente = patente,
        this.marca = marca,
        this.modelo = modelo
        this.tiempo = tiempo

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
        espacio = form[0].value
        tipo = form[1].value
        patente = form[2].value
        marca = form[3].value
        modelo = form[4].value
        tiempo = new Date();
        this.espacios[espacio] = new Auto(tipo, patente, marca, modelo, tiempo)

        console.log(this.espacios[0])

        /*Comando para crear objeto en JSON*/
        console.log(JSON.stringify(this.espacios));
    }
}

estacionamiento.inicioarray()
var monto = 1;
var date = new Date();




















