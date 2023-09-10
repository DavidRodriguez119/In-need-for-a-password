// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Object that will save all the criteria selected by the user
var passwordCriteria = {
  numberOfDigits : 8,
  lowercase : true,
  uppercase : false,
  numeric : false,
  specialCharacters : false,
};

// Arrays that will enclose every option within each criteria type
var lowercaseOpString = `abcdefghijklmnopqrstuvwxyz`;
var uppercaseOpString = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var numericOpString = `0123456789`;
var specialCharactersOpString = ` !"#$%&'(*)+,-./:;<=>?@[\]^_{|}~`;
// Split strings to optain the arrays
var lowercaseOptions = lowercaseOpString.split(``);
var uppercaseOptions = uppercaseOpString.split(``);
var numericOptions = numericOpString.split(``);
var specialCharactersOptions = specialCharactersOpString.split(``);

// Function for the user to select the critiria that they want for their password
function generatePassword () {

  // ask the user for the length of the password (prompt)
  // verify that the user inserted a number between 8 & 128. if not alert & give another chance (if statement)
  var checkLength = false;
  while (checkLength === false){

    passwordCriteria.numberOfDigits = prompt(`Please enter the number of digits that you want your password to have. (Enter a number between 8 and 128)`);

    if (passwordCriteria.numberOfDigits === null){ //Make sure the cancel button works
      break;
    } else if (/^\d+$/.test(passwordCriteria.numberOfDigits)){ //verify that all the digits are numbers
      if (passwordCriteria.numberOfDigits >= 8 && passwordCriteria.numberOfDigits <= 128){
        checkLength = true;
      } else {
        alert(`Please enter a number between 8 and 128`);
      };
    } else {
      alert(`Invalid input :(\nPlease make sure to just enter numbers`);  
    };
  };

  var chosenCriteria = []
  var criteriaPicked = 0

  while (criteriaPicked === 0){

    // ask the user if the password should include lowercase letters (confirm)
    passwordCriteria.lowercase = confirm(`Would you like your password to have lowercase letters?`);
    if (passwordCriteria.lowercase === true){
      chosenCriteria.push(lowercaseOptions);
    }

    // ask the user if the password should include uppercase letters (confirm)
    passwordCriteria.uppercase = confirm(`Would you like your password to have uppercase letters?`);
    if (passwordCriteria.uppercase === true){
      chosenCriteria.push(uppercaseOptions);
    };

    // ask the user if the password should include numbers (confirm)
    passwordCriteria.numeric = confirm(`Would you like your password to have numbers?`);
    if (passwordCriteria.numeric === true){
      chosenCriteria.push(numericOptions);
    };

    // ask the user if the password should include special characters (confirm)
    passwordCriteria.specialCharacters = confirm(`Would you like your password to have special characters?`);
    if (passwordCriteria.specialCharacters === true){
      chosenCriteria.push(specialCharactersOptions);
    };
    
    // Count how many categories were picked by the user 
    for (let key in passwordCriteria){
      if (passwordCriteria[key] === true){
        criteriaPicked++;
      }
    };  

    if (criteriaPicked === 0){
      alert(`Please select at least one type of digit that you would like your password to have.\nYou'll go through all the options again.`)
    };
  
  }      

  // based on the chosen length assign randomly how many digits will be given to each category 
  // save each value in it's own variable

  // build password
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
