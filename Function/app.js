let numeros = parseInt(prompt('Ingrese la cantidad de numeros a los cuales quiere sacar el promedio'));

let valor;
let resultado = 0;

if(typeof numeros !== "string") console.error('Debe ingresar numeros, no cadenas de texto')

if(numeros === 0) console.warn('El numero ingrsado no puede ser 0');

else{

    for(let i=0; i<numeros; i++){
        valor = parseInt(prompt('Ingrese un numero para sumar'));
        resultado += valor;     
    
        
    }
}



function promedio (resultado,numeros){
    return resultadoFinal = resultado/numeros; 
}


promedio(resultado,numeros)

console.log(Math.round(resultadoFinal));