// Questions:
// -Prompt & function if/else for when character amount isnt 8-128.And how to code the range from 8-128. and go back to start.
// - Prompt for not selecting any of the chacter types. go back to getPasswordOptions, i get error that getPasswordOptions isn't a function.
// - why do i need to refresh page to run generate password again. error.
// - Turn in challenge

var specialCharacters = [""];

var numericCharacters = [""];

var lowerCasedCharacters = [""];

var upperCasedCharacters = [""];

function getPasswordOptions () {
  getNumberAmount ();
  getSpecialCharacters ();
  getNumericCharacters ();
  getLowerCharacters ();
  getUpperCharacters ();

  // if (getPasswordOptions = " ") {
  //   noCharacters ();
  // };

};

// function noCharacters () {
//   const response = confirm("You must chose at least one character group.");

//   if (response) {
//     return getPasswordOptions ();
    
//   } else {
//     return;
    
//   };
// };



function getNumberAmount() {
  var length = parseInt(prompt("what character amount do you want for your password (8-128)?"));
  console.log("length",typeof length)
  if (length < 8 || length > 128 ) {
    const response = confirm("You must select a number from 8-128!");
    // return;
  } else {
    return;
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
  
    numericCharacters = ['1324567890'];
  } else {
 
    numericCharacters = [""];
  };
}

function getLowerCharacters () {
  const response = confirm("Do You want lower case characters in your password?");

  if (response) {
 
    lowerCasedCharacters = ['qwertyuiopasdfghjklzxcvbnm'];
  } else {

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

function generatePassword() {
  var pass = '';
  var str = specialCharacters + numericCharacters
   + lowerCasedCharacters + upperCasedCharacters;

  for (let i = 1; i <= length; i++) {
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

