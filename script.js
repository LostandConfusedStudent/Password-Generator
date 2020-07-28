// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Identify variables with prompt and confirms for user interaction.

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

  // Want empty arrays to push arrays sets into based on user input and then randomize the data

  // If statements to push array sets into empty array depending on user input

  // For loop to randomize the data

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
