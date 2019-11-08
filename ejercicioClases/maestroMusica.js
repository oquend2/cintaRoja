/* 1. Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones 
   (puedes usar arreglos). El maestro de física tiene un 
   atributo "antiguedad" que guarda un valor numerico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.
------------------------------------------------------------
 */
const { Maestro } = require("./maestro");

class MaestroMusica extends Maestro {
    constructor(nombre, horario, calificacion, grupo, materia, edad) {
        super(nombre, horario, calificacion, grupo, materia);
        this.edad = edad;
      }
      getedad() {
        return this.edad;
      }
}

module.exports = { maestroMusica };