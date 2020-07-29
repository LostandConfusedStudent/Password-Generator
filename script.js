// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Define variables with prompt and confirms for user interaction.

  var length = prompt("How many characters do you want for your password?");

  // Set range for password length. Must be between 8 and 128. Otherwise there will be an alert for clarification and function writePassword will start over

  if (length < 8 || length > 128) {
    alert("Enter a number between 8 and 128 please.")
    return writePassword();
  }
  var uppercase = confirm("Want uppercase letters?");
  var lowercase = confirm("Want lowercase letters?");
  var numbers = confirm("Want numbers?");
  var symbols = confirm("Want symbols?");


  // Sets of arrays for input data

  var addUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var addLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var addNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var addSymbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "[", "}", "]", ":", ";", '"', "'", ",", ".", "<", ">", "?", "/", "|", "\\"]


  // Want empty arrays to push arrays sets into based on user input and then randomize the data

  var emptyArray = [];
  
  var randomizer = [];

  // If statements to push array sets into empty array depending on user input

  // For loop to randomize the data

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
