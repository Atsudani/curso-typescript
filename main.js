"use strict";
(() => {
    class Persona {
        constructor(nombre, apellido, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            console.log(`Has creado la persona ${this.nombre}`);
        }
        saludar() {
            console.log(`Te saluda ${this.nombre}`);
        }
    }
    Persona.poderMaximo = 100;
    class Heroe extends Persona {
        constructor(nombre, apellido, edad, clase) {
            super(nombre, apellido, edad);
            this.clase = clase;
            console.log(`Heroe ${nombre} creado`);
        }
    }
    const atuti = new Persona('Atsushi', 'Kusunose', 29);
    atuti.saludar();
    const spider = new Heroe('Peter', 'Parker', 20, 'aranha');
    spider.saludar();
})();
//# sourceMappingURL=main.js.map