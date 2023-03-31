const myObject = {
    nombre: "mateo",
    apellido: "juradi",
    edad: 26,
    altura: 180,
    eresDeveloper: true
}
let years = myObject.edad;

let newObject = [
    myObject,
    {
        nombre: "alejo",
        apellido: "rios",
        edad: 27,
        altura: 170,
        eresDeveloper: true
    },
    {
        nombre: "juan",
        apellido: "serna",
        edad: 27,
        altura: 173,
        eresDeveloper: false
    }
]

let myNewList = newObject.sort((a, b) => b.edad - a.edad);
console.log(myNewList);