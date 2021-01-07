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

function generatePassword() {
  var userSelection= ("");
  var passwordLength = prompt("Password must have at least 8 characters but less than 128. How many characters would you like?");
  if (passwordLength < 8) {
    alert("Please choose a password of at least 8 characters. Please start over.");
    return;
  }
  if (passwordLength > 128) {
    alert("Please choose a password of less than 128 characters. Please start over.");
    return;
  }
  var wantsLowercase = confirm("Would you like lowercase letters? Select ok for yes, cancel for no.");
  if (wantsLowercase) {
    alert("Lowercase letters included. Select ok to go to the next step.");
    userSelection+= charsetLower;
  }
  else {
    alert("Not including lowercase letters.");
  }
  var wantsUppercase =confirm("Would you like to include uppercase letters? Select ok for yes, cancel for no.");
  if (wantsUppercase) {
    alert("Uppercase letters included. Select ok to go to the next step.");
    userSelection+= charsetUpper;
  }
  else { 
    alert ("Not including uppercase letters.");
  }
  var wantsNumbers =confirm("Would you like to include numbers? Select ok for yes, cancel for no.");
  if (wantsNumbers) {
    alert("Numbers are included. Select ok to go to the next step.");
    userSelection+= charsetNumber;
  }
  else { 
    alert ("Not including numbers.");
  }
  var wantsSpecialChar =confirm("Would you like to include special characters? Select ok for yes, cancel for no.");
  if (wantsSpecialChar) {
    alert("Special characters are included. Select ok to go to the next step.");
    userSelection+= charsetSpecial;
  }
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


