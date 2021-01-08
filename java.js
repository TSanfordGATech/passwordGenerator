// This is the generate assigned variable
var generateBtn = document.querySelector("#generate");

// Establish my character set arrays 
var charsetLower =("abcdefghijklmnopqrstuvwxyz");
var charsetUpper =("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var charsetNumber =("0123456789");
var charsetSpecial =("!#$%&'()*+,-/:;<>?@[]\^_{}`~");


// These are the passwords and password input responses. 
function writePassword(create) {
  var password = generatePassword();
}
// Kick off the first function, asking the character amount
function generatePassword() {
  var userSelection= ("");
  var passwordLength = prompt("Password must have at least 8 characters but less than 128. How many characters would you like?");
  // if the user selects a password less than 8 characters, we will exit them and start over. 
  if (passwordLength < 8) {
    alert("Please choose a password of at least 8 characters. Please start over.");
    return;
  }
  // if the user selects a password greater than 128 characters, we will exit them and start over. 
  if (passwordLength > 128) {
    alert("Please choose a password of less than 128 characters. Please start over.");
    return;
  }
  var wantsLowercase = confirm("Would you like lowercase letters? Select ok for yes, cancel for no.");
   // if the user selects they want lower case we will accept and move to the next step
  if (wantsLowercase) {
    alert("Lowercase letters included. Select ok to go to the next step.");
    userSelection+= charsetLower;
  }
   // If the user does not want lower case, then we will not include them and move to the next step. 
  else {
    alert("Not including lowercase letters.");
  }
  var wantsUppercase =confirm("Would you like to include uppercase letters? Select ok for yes, cancel for no.");
  // asks if user wants upper. If yes, continue 
  if (wantsUppercase) {
    alert("Uppercase letters included. Select ok to go to the next step.");
    userSelection+= charsetUpper;
  }
  // if no, dont inclue them and continue 
  else { 
    alert ("Not including uppercase letters.");
  }
  var wantsNumbers =confirm("Would you like to include numbers? Select ok for yes, cancel for no.");
  // asks if user wants numbers. If yes, take a number and continue 
  if (wantsNumbers) {
    alert("Numbers are included. Select ok to go to the next step.");
    userSelection+= charsetNumber;
  }
  // if no, dont include and continue 
  else { 
    alert ("Not including numbers.");
  }
  var wantsSpecialChar =confirm("Would you like to include special characters? Select ok for yes, cancel for no.");
  // asks if user wants special characters. If yes, include. 
  if (wantsSpecialChar) {
    alert("Special characters are included. Select ok to go to the next step.");
    userSelection+= charsetSpecial;
  }
  // if no, dont include and continue
  else { 
    alert ("Not including special characters.");
  }

  // before ending the function, I am adding console logs in to check and validate the selections.
  console.log(passwordLength);
  console.log(wantsLowercase);
  console.log(wantsUppercase);
  console.log(wantsNumbers);
  console.log(wantsSpecialChar);

  // start my function to generate my password 
  var passwordGen = "";
  for (var i=0 ; i < passwordLength; ++i) {
    passwordGen += userSelection.charAt(Math.floor(Math.random() * userSelection.length));
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordGen;
  console.log(passwordGen);
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


