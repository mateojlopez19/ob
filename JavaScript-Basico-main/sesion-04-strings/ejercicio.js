let namee = "Mateo";
let lastName = "Jurado";
let student = namee + " "+ lastName;
console.log(student);

// ---------------------------

let studentUpper = student.toUpperCase();
let studentLower = student.toLowerCase();
let studentCount = student.length;
let firstLetterName = namee.charAt(0);
let lastLetterLastName = lastName.charAt(lastName.length - 1);
let eraserSpacesStudent = student.replace(" ", "");
let contentWordInStudent = student.includes(namee);
console.log(studentUpper);
console.log(studentLower);
console.log(studentCount);
console.log(firstLetterName);
console.log(lastLetterLastName);
console.log(eraserSpacesStudent);
console.log(contentWordInStudent);
