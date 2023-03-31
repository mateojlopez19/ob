//fecha actual
let currentDate = new Date();
console.log(currentDate.toLocaleDateString())
//fecha de nacimeinto

let birthDate = new Date("10/30/95");
console.log(birthDate.toLocaleDateString());
//comparacion de fechas

let comparisonDate = currentDate > birthDate;
console.log(comparisonDate);
//dia d nacimiento

let dateBirth = birthDate.getDate();
console.log(dateBirth);
//mes de nacimeinto

let monthBirthDate = birthDate.getMonth()+1;
console.log(monthBirthDate);
//Año de naicimiento

let yearBirth = birthDate.getFullYear();
console.log(yearBirth);
