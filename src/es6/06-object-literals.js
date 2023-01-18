//enahced object literals

function newUser(user, age, country, uId)  {
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("Oscar", 23, "AR", 1));