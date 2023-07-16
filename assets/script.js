// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log(`Hey!  You clicked the button.`);
  // 1. Prompt the user with the password criteria
  //    a. Password length between 8 and 128
  //    b. Lowercase, Uppercase, Numbers, Special Characters
  
  // 2. Validate the input

  // 3. Generate password

  // 4.  Display the generated password on the page
  return `Generated password will go here!`;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
