// Assignment code here
// Questions:
// - Prompt for not selecting any of the chacter types. loop back to getPasswordOptions, i get error that getPasswordOptions isn't a function.
// - Prompt & function if/else for when character amount isnt 8-128.And how to code the range from 8-128. and loop back to start.
// - why do i need to refresh page to run generate password again. error.
// - Turn in challenge


var specialCharacters = [""];

var numericCharacters = [""];

var lowerCasedCharacters = [""];

var upperCasedCharacters = [""];


// Function to prompt user for password options
function getPasswordOptions () {
  getNumberAmount ();
  getSpecialCharacters ();
  getNumericCharacters ();
  getLowerCharacters ();
  getUpperCharacters ();

  if (getPasswordOptions = " ") {
  // prompt("You need to say yes to at least one group.","");
    noCharacters ();
  };

};

function noCharacters () {
  const response = confirm("You must chose at least one character group.");

  if (response) {
    return getPasswordOptions ();
    
  } else {
    return getPasswordOptions ();
    
  };
};

// function noNumbers () {
//   const response = confirm("You must select a number from 8-128.");

//   if (response) {
//   return getPasswordOptions ();
  
//   } else {
//   return getPasswordOptions();
  
//   };
// };

function getNumberAmount() {
  n = Number(prompt("what character amount do you want for your password (8-128)?",
  ""));
  if (n != (8 , 128)) {
    // n = Number(prompt("You must select a number from 8-128!"))
    const response = confirm("You must select a number from 8-128!");

    if (response) {
    return getPasswordOptions ();
    
    } else {
    return;
    
    };
  };

  };
  

function getSpecialCharacters () {
  const response = confirm("Do You want special characters in your password?");

  if (response) {
    specialCharacters = ['!@ #$%^&*()_+-=[]{};'];
    
  } else {
    specialCharacters = [""];

  };
}

function getNumericCharacters () {
  const response = confirm("Do You want numbers in your password?");

  if (response) {
    // add code if the user pressed the Ok button
    numericCharacters = ['1324567890'];
  } else {
    // add code if the user pressed the Cancel button
    numericCharacters = [""];
  };
}

function getLowerCharacters () {
  const response = confirm("Do You want lower case characters in your password?");

  if (response) {
    // add code if the user pressed the Ok button
    lowerCasedCharacters = ['qwertyuiopasdfghjklzxcvbnm'];
  } else {
    // add code if the user pressed the Cancel button
    lowerCasedCharacters = [""];
 
  };
}

function getUpperCharacters () {
  const response = confirm("Do You want upper case characters in your password?");

  if (response) {
    upperCasedCharacters = ['QWERTYUIOPASDFGHJKLZXCVBNM'];
  } else {
    upperCasedCharacters = [""];
  };
}

// Funciton for getting a random element from an array
// function getRandom(arr) {};


// Function to generate pasword withh user input
function generatePassword() {
  var pass = '';
  var str = specialCharacters + numericCharacters
   + lowerCasedCharacters + upperCasedCharacters;
 

  for (let i = 1; i <= n; i++) {
      var char = Math.floor(Math.random() * str.length + 1);
      
      pass += str.charAt(char);
      
      
  }
 
  return pass;
  
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
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