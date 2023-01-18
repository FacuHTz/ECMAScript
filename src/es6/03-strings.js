let hello = "hello";
let world = "world";

let epicPhrase = hello + " " + world; //así se unían las frases antes de ecmascript6

//ahora con template Literals

let epicPhrase2 = `${hello} ${world}!`; //la idea es dejar de tener que concatenar espacios en blanco y diferentes strigs

//multilinea strings cobcatenando strings vs usando template literals

let lorem = "esto es un string \n" + "esto es un string en la linea de abajo";

let lorem2 = `Esta es una frase epica
esto es la frase en la linea de abajo
`;

console.log(lorem)
console.log(lorem2)