//cada forma de declarar una variable tiene su razón ya sea que nos importa su alcance o su capacidad de ser modificada o no

var lastname = "David";
lastname="Oscar";
console.log(lastname)

let fruit = "Apple";
fruit = "Orange";
console.log(fruit)

const animal = "Dog";//No se pueden reasignar los valores a const
animal = "Cat";
console.log(animal)


const fruits = () => {
    if (true) {
        var fruit1="apple"    //function scope
        let fruit2="orange"   //block scope
        const fruit3="banana" //block scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits();