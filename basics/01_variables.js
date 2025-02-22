const accountID = 144553
let accountEmail = "bhavya@google.com"
var accountPassword = "12345"
accountCity = "Nadiad"
let accountState;

// accountID = 2 // changing constant keyword not allowed

accountEmail = "bhavyak@google.com"
accountPassword = "212121"
accountCity = "Anand"

console.log(accountEmail);

/*
Prefer not to use VAR
because of issue in block scope and function scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])