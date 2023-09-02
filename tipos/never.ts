(()=>{

    //never no tiene que terminar bien, si se ejecuta una funcion-
    //que tiene never, el programa para... o sea es un raise
    const abc = ( mensaje: string):(never|number) =>{
        if (false) {
            throw new Error(mensaje)            
        }

        return 1;
    }

    abc('Auxilio!');
    console.log('Hola mundo'); //esta linea no se va ejucturar porque el programa va parar en la linea anterior..
})()