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

class MaestroFisica extends Maestro {
    constructor(nombre, horario, calificacion, grupo, materia, antiguedad) {
    super(nombre, horario, calificacion, grupo, materia);
    this.antiguedad = antiguedad;
  }

}


let lucas = new MaestroFisica("lucas",6,[2,3,4],5,"fisica",5);

console.log(lucas.promedio());



