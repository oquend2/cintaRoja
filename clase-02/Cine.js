const {Pelicula} = require("./Pelicula")
const {Documental} = require("./Documental")

class Cine {
  constructor(sala){
    this.sala = sala
  }
  reproducir(largometraje){
    return `En la sala ${this.sala} se está reproduciendo ${largometraje.getTitulo()}`
  }
}

let miPelicula = new Pelicula("Iron Man",120,"Pepito", "Robert Dawling Jr") 
let miDocumental = new Documental("Colombia Salvaje",240,"John Doe","Naturaleza") 

let miCine = new Cine(5)

// console.log(miCine.reproducir(miPelicula));

console.log(miPelicula.getReparto());