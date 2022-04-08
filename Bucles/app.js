const name = prompt('Ingresa un nombre valido, porfavor');
const nro = parseInt(prompt('INgresa la cantidad de veces que deseas imprimirlo por consola'));


if(name == "") console.error('Debes ingresar una cadena de texto valida');
if(nro <= 0) console.warn('El numero ingresado no puede ser 0');
else{
    for(let i = 1; i <= nro; i++ ){
        console.log(`${i}: ${name}`)

    }
}


