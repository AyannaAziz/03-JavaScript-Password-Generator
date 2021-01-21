// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  // The Password generator will provide a password with 8-128  characters based on criteria the user specifies.

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var getSpecialChar;
var getNumeric;
var getUpper;
var getLower;
var passwordLength = 0;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to contain?"));

  // Loop iff answer is outside the required parameters 
  while(passwordLength <= 7 || passwordLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var passwordLength = (prompt("How many characters would you like your password to contain?"));
      } 

    // Prompt user to select parameters of the password 
    var getSpecialChar = confirm("Click OK to confirm if you would like to include special characters");
    var getNumeric = confirm("Click OK to confirm if you would like to include numeric characters");    
    var getLower = confirm("Click OK to confirm if you would like to include lowercase characters");
    var getUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
      
    //throw error is user selects no char types and force them back into the loop to select
    while(getUpper === false && getLower === false && getSpecialChar === false && getNumeric === false) {
      alert("You must choose at least one parameter");
    var getSpecialChar = confirm("Click OK to confirm if you would like to include special characters");
    var getNumeric = confirm("Click OK to confirm if you would like to include numeric characters");    
    var getLower = confirm("Click OK to confirm if you would like to include lowercase characters");
    var getUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
      
    }
      // Empty array to hold the diff char types that will be used to generate the random password 
      var passwordCharacters = []
      
      // if statements to populate the empty array with specified characters using concat
    if (getSpecialChar) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (getNumeric) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (getLower) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    if (getUpper) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      // populated randomPassword string of specified length with chars from passwordCharacters array
      for (var i = 0; i < passwordLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

