// const { act } = require("react")

const accountId = 12345
let accountEmail = "abhishek@gmail.com"
var accountPassword ="123456"
 accountCity = "bangalore"
 let accountState;  // you didn't define value therefore it is undefined


// accountId = 2  // not allowed 

accountEmail="hc@hc.com"
accountPassword="2121"
accountCity="mumbai"


// console.log(accountId);
// table method 



/*
Prefe not to use var because of block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


