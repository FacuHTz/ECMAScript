//array destructuring

let fruits = ["apple", "banana"]
let[a, b] = fruits;
console.log(a, fruits[1]);

//object destructuring

let user = {username:"Oscar", age: 34};
let {username, age} = user;
console.log(username, user.age);