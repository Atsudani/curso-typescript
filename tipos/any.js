"use strict";
//hay que tratar de evitar usar el tipo de dato any
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strangeee';
    //casting, esto es de typescript.. no de javascript
    console.log(avenger.charAt(1));
    //casting.. otra forma
    console.log(avenger.length);
    //puedo resumir, sacando los parentesis..
    console.log(avenger.length);
    console.log(avenger.charAt(0));
    avenger = 150.23432432;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
