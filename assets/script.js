// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log(`Hey!  You clicked the button.`);
  // 1. Prompt the user with the password criteria
  //    a. Password length between 8 and 128
  //    b. Lowercase, Uppercase, Numbers, Special Characters
      var criteriaPrompt = prompt(`How long would you like your password to be?`, `Pick a number 8-128`);
      
      criteriaPrompt = parseInt(criteriaPrompt);
      if (isNaN (criteriaPrompt)) {
        alert(`Please choose a number and try again! :)`)
      }
      else {
        if (criteriaPrompt < 8) {
          alert(`Password cannot be less than 8 characters.`)
        }
        else if (criteriaPrompt > 128) {
          alert(`Password cannot be larger than 128 characters.`)
        }
        // var lowercasePrompt = prompt () ask if they want lowercase characters
      }
    //  Use a switch instead of if else statement
      if (criteriaPrompt < 8) {
        alert(`Sorry, please choose a longer password.`);
      } else if ({

      } else {

      }

      // how do I say number values only
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
