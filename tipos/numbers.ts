(()=>{
    let avengers: number = 108;

    console.log( avengers );

    const villians: number = 20;

    if( avengers < villians){
        console.log('Estamos en problemas');
    }else{
        console.log('Nos salvamos');
    }

    avengers = 123;

    console.log(avengers);

    avengers = Number('123A'); //NaN es considerado como number

    console.log({ avengers });

})()
    
