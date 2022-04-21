const alumnos = [
    alumno1 = {
        nombre: "",
        nota: ""
    },
    alumno2 = {
        nombre: "",
        nota: ""
    },
    alumno3 = {
        nombre: "",
        nota: ""
    },
    alumno4 = {
        nombre: "",
        nota: ""
    }
]


const imprimirResultados = () => {
    alumnos.forEach(el => {
        el.nombre = prompt('Ingrese el nombre del examen de ');
        el.nota = parseInt(prompt(`Ingrese la nota del examen de ${el.nombre}`));       
        
    })
}

imprimirResultados()
console.log(alumnos)


const alumnosAprobados =  alumnos.filter(el => el.nota >= 7 )


console.log(alumnosAprobados)
