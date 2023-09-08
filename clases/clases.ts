(()=>{
    class Persona{

        static poderMaximo:number = 100;

        constructor(
            private nombre: string,
            private apellido: string,
            private edad: number
        ){
            console.log(`Has creado la persona ${this.nombre}`);
        }

        public saludar(){
            console.log(`Te saluda ${this.nombre}`);
        }
    }

    class Heroe extends Persona{

        constructor(
            nombre:string,
            apellido:string,
            edad:number,
            private clase:string
        ){
            super(nombre,apellido,edad);
            console.log(`Heroe ${nombre} creado`);
        }
    }

    const atuti = new Persona('Atsushi','Kusunose',29);

    atuti.saludar();

    const spider = new Heroe('Peter','Parker',20,'aranha');

    spider.saludar();
})()