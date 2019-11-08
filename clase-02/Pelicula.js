const {Largometraje} = require("./Largometraje")

class Pelicula extends Largometraje {
  constructor(titulo, duracion, director, reparto){
    super(titulo, duracion, director)
    this.reparto = reparto
  }
  getReparto(){
    return this.reparto
  }
}

module.exports = {Pelicula}