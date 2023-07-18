// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
var uppercase = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
var specialCharacters = [`!`,``, ];
var numbers = [`0`, `1`, `2`]
var storeArray = [];
var character = [];

function generatePassword() {
  console.log(`Hey!  You clicked the button.`);
  // 1. Prompt the user with the password criteria
  //    a. Password length between 8 and 128
  //    b. Lowercase, Uppercase, Numbers, Special Characters
      var criteriaPrompt = prompt(`How long would you like your password to be?`, `Pick a number 8-128`);
      
      criteriaPrompt = parseInt(criteriaPrompt);
      if (isNaN (criteriaPrompt)) {
        alert(`Please choose a number and try again! :)`)
        return;
      }

      if (criteriaPrompt < 8 || criteriaPrompt > 128) {
        alert(`Password cannot be less than 8 characters or larger than 128 characters.`)
        return;
        }
    
      var lowercasePrompt = confirm (`Do you want to use lowercase letters?`)
      console.log(lowercasePrompt)
      if (lowercasePrompt == true) {
        storeArray = lowercase.concat(storeArray);
        // storeArray = uppercase.concat(storeArray);
      }

      var uppercasePrompt = confirm (`Do you want to use uppercase letters?`)
      console.log(uppercasePrompt)
      if (uppercasePrompt == true) {
        storeArray = uppercase.concat(storeArray);
      }
      console.log(storeArray);

  // 3. Generate password
  for (var i = 0; i < criteriaPrompt; i++) {
    var storeNumber = Math.floor(Math.random() * storeArray.length);
    console.log(storeNumber);
    var index = storeArray[storeNumber];
    console.log (index);
    character.push(index);
    // character.push(storeArray[storeNumber]);
    console.log(character);
  }
  // 4.  Display the generated password on the page
  return character.join(``);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
