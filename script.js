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
var lowercaseOptions = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, 'k', `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
var uppercaseOptions = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
var numericOptions = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
var specialCharacters = [` `, `!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `>`, `=`, `?`, `@`, `[`, `]`, `^`, `_`, `{`, `}`, `|`, `~`];

// Function for the user to select the critiria that they want for their password
function generatePassword () {
  // ask the user for th length of the password (prompt)
  passwordCriteria.numberOfDigits = prompt(`Please enter the number of digits that you want your password to have. (Enter a number between 8 and 128)`);

  // verify that the user inserted a number between 8 & 128. if not alert & give another chance (if statement)
  // ask the user if the password should include lowercase letters (confirm)
  // ask the user if the password should include uppercase letters (confirm)
  // ask the user if the password should include numbers (confirm)
  // ask the user if the password should include special characters (confirm)
  
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
