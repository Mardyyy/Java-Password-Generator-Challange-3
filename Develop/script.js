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
  getNumberAmount ();
  getSpecialCharacters ();
  getNumericCharacters ();
  getLowerCharacters ();
  getUpperCharacters ();
};


function getNumberAmount() {
  var doc = prompt("Please enter some text",
  "GeeksforGeeks");
if (doc != null) {
  document.getElementById("g").innerHTML =
      "Welcome to " + doc;
};
};

function getSpecialCharacters () {
  const response = confirm("Do You want special characters in your password?");

  if (response) {
    // add code if the user pressed the Ok button
    console.log("Ok was pressed");
  } else {
    // add code if the user pressed the Cancel button
    console.log("Cancel was pressed");
  };
}

function getNumericCharacters () {
  const response = confirm("Do You want special characters in your password?");

  if (response) {
    // add code if the user pressed the Ok button
    console.log("Ok was pressed");
  } else {
    // add code if the user pressed the Cancel button
    console.log("Cancel was pressed");
  };
}

function getLowerCharacters () {
  const response = confirm("Do You want special characters in your password?");

  if (response) {
    // add code if the user pressed the Ok button
    console.log("Ok was pressed");
  } else {
    // add code if the user pressed the Cancel button
    console.log("Cancel was pressed");
  };
}

function getUpperCharacters () {
  const response = confirm("Do You want special characters in your password?");

  if (response) {
    // add code if the user pressed the Ok button
    console.log("Ok was pressed");
  } else {
    // add code if the user pressed the Cancel button
    console.log("Cancel was pressed");
  };
}
// Funciton for getting a random element from an array
function getRandom(arr) {};

// Function to generate pasword withh user input
function generatePassword() {
  // Basic Generator
  var pass = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
  'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    
  for (let i = 1; i <= 8; i++) {
      var char = Math.floor(Math.random()
                  * str.length + 1);
        
      pass += str.charAt(char)
  }
    
  return pass;
  
  // My Generator:
  // var pass = '';
  // var str = specialCharacters + numericCharacters 
  // + lowerCasedCharacters + upperCasedCharacters;
    
  // for (let i = 1; i <= getNumberAmount; i++) {
  //     var char = Math.floor(Math.random()
  //                 * str.length + 1);
        
  //     pass += str.charAt(char)
  // }
    
  // return pass;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // getPasswordOptions();
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



// Notes:

// Basic Random password generator::
// function generatePassword() {
//   var pass = '';
//   var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
//           'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    
//   for (let i = 1; i <= 8; i++) {
//       var char = Math.floor(Math.random()
//                   * str.length + 1);
        
//       pass += str.charAt(char)
//   }
    
//   return pass;
// };