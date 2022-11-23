let numeroUno= 8;
let numeroTre= 3;
let numeroCinque= 5;
let result= numeroUno % numeroTre === 0;
console.log(result);


for (let i=1 ; i < 101 ; i++){

    if(i % numeroTre === 0){
        console.log('fizz')
    
    }else if(i % numeroCinque === 0){
        console.log('buzz')

    }
    else{
        console.log(i)
    }
    
}