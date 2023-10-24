// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){
  console.log ("you clicked the button")

  var lengthInput = prompt("How many characters would you like your password to contain?:");
  var length = parseInt(lengthInput);

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";

}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);


//Prompts:
//1. password length (8 - 128 characters) 
//2. include lowercase, uppercase, numeric,and/or special characters
//3. validate the input. (At least one character type should be inputed)
//4. display password 