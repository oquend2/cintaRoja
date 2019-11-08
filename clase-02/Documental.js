const { Largometraje } = require("./Largometraje");

class Documental extends Largometraje {
  constructor(titulo, duracion, director, tematica) {
    super(titulo, duracion, director);
    this.tematica = tematica;
  }
  getTematica() {
    return this.tematica;
  }
}

module.exports = { Documental };
