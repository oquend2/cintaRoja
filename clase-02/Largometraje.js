class Largometraje {
  constructor(titulo, duracion, director) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.director = director;
  }
  getTitulo() {
    return this.titulo;
  }
}

module.exports = { Largometraje };
