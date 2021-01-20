// Create generatepassword function
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// CODE HERE

// Creating variables with array of characters that can be used to generate password
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordLength = 0;


// Declare vars for user to confirm in prompts
var upperCase;
var lowerCase;
var numeric;
var specialChar;
var passwordLength ;
 
function generatePassword() {

  var passwordLength = (prompt("How many long would you like your password to be? Choose between 8-128."));

  // Loop iff answer is outside the parameters 
while(passwordLength <= 7 || passwordLength >= 129) {
  alert("Password length must be between 8-128 characters Try again");
  var passwordLength = (prompt("How many characters would you like your password to contain?"));
  } 
 // Determine parameters of password 
 var specialChar = confirm("Click OK to include special characters");
 var numeric = confirm("Click OK to include numeric characters");    
 var lowerCase = confirm("Click OK to include lowercase characters");
 var upperCase = confirm("Click OK to include uppercase characters");


 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
