"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Atsushi Kusunose`;
    console.log(batman.toUpperCase());
    console.log(`Hola, soy ${volcanNegro}`);
    // ? es nullcheck.. si tiene algo hace algo, sino, nada...
    // podes poner or para que haga lo que pones en esa condicion
    console.log(((_a = batman[3]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'puto');
})();
