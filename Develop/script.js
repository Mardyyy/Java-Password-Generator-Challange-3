// Assignment code here

// Array of spectial character to be included in password
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','-','-','=','+','[','{',']','}','|',';'];

// Array of numeric characters to be included in password
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['qwertyuiopasdfghjklzxcvbnm '.split(
  '')];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['QWERTYUIOPASDFGHJKLZXCVBNM '.split(
  '')];

// Function to prompt user for password options
function getPasswordOptions() {
 
};

// Funciton for getting a random element from an array
function getRandom(arr) {};

// Function to generate pasword withh user input
function generatePassword() {}; 

var generatePassword = function () {};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Given Code:
// Assignment code here

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);