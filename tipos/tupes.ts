(()=>{
    //definicion de arreglo
    const hero1 = ['Dr Strangre',100];
    const hero2: (string | number)[] = [1,2];

    //definicion de tupla
    //la tupla es como un arreglo estricto con los tipos de datos
    const hero3: [string,number] = ['abc',50];
    hero3[0] = 'adfasdfasdf';
    hero3[1] = 5;

    //Es el fin jeje
})()