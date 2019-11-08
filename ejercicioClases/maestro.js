/* 1. Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones 
   (puedes usar arreglos). El maestro de física tiene un 
   atributo "antiguedad" que guarda un valor numerico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.
------------------------------------------------------------
 */

class Maestro {
    constructor(nombre, horario, calificacion, grupo, materia ) {
      this.nombre = nombre;
      this.horario = horario;
      this.calificacion = calificacion;
      this.grupo = grupo;
      this.materia = materia;
      
      
    }
    promedio() {
        let suma = 0
        let promedio = 0
        for(let i = 0 ; i < this.calificacion.lenght; i++){
            suma = suma + i
        }
        promedio = suma/ this.calificacion.lenght

      return promedio
    }
  }
  
  module.exports = { Maestro };
  