(()=>{
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Atsushi Kusunose`;

    console.log(batman.toUpperCase());
    console.log(`Hola, soy ${ volcanNegro }`);

    // ? es nullcheck.. si tiene algo hace algo, sino, nada...
    // podes poner or para que haga lo que pones en esa condicion
    console.log( batman[3]?.toUpperCase() || 'puto');
})()