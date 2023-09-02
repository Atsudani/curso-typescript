(() => {
    const numbers: number[] = [1,2,3,4,5,6];

    numbers.forEach(arreglo => {
        console.log( arreglo );
    });

    const miArreglo: (string | number | boolean)[] = [1,2,3,4,5,'hola', true];

    miArreglo.forEach( elemento => {
        console.log( elemento.toString() );
    });
})()