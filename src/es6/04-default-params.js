function newUser(name, age, country) {
  var name = name || "Oscar";  //así se declaraban default params antes de ecmascript6
  var age = age || "25";
  var country = country || "US";
  console.log(name, age, country);
}

newUser();
newUser("David", 27, "AR");


//desde ecmascript6

function newUser(name="Oscar", age=24, country="US"){ //se le pasan los parametros por defecto directamente en la declaracion de la funcion
    console.log(name, age, country);
}

newUser();
newUser("David", 32, "AR");