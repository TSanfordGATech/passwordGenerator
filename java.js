// This is the generate assigned variable
var generateBtn = document.querySelector("#generate");


// These are the passwords and password input responses. 
function writePassword(create) {
  var password = generatePassword();
}

function generatePassword() {
  var passwordLength = prompt("Password must have at least 8 characters. Please tell us how many you would like, greater than 8.");
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
  }
  else {
    alert("Not including lowercase letters.");
  }
  var wantsUppercase =confirm("Would you like to include uppercase letters? Select ok for yes, cancel for no.");
  if (wantsUppercase) {
    alert("Uppercase letters included. Select ok to go to the next step.");
  }
  else { 
    alert ("Not including uppercase letters.");
  }
  var wantsNumbers =confirm("Would you like to include numbers? Select ok for yes, cancel for no.");
  if (wantsNumbers) {
    alert("Numbers are included. Select ok to go to the next step.");
  }
  else { 
    alert ("Not including numbers.");
  }
  var wantsSpecialChar =confirm("Would you like to include special characters? Select ok for yes, cancel for no.");
  if (wantsSpecialChar) {
    alert("Special characters are included. Select ok to go to the next step.");
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

// Need to define my character set array, my return value math, and how my password comes. 
// Need to update this to be an array. If they select blah then they can a few random blah. 
// my charset is only 92 characters. Need help with this portion. Need to update this to be an array. I thought my math would make it stop and not go over the 128 in the requirements.

// Establish my character set arrays 
var charsetLower =("abcdefghijklmnopqrstuvwxyz");
var charsetUpper =("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var charsetNumber =("0123456789");
var charseSpecial =("!#$%&'()*+,-/:;<>?@[]\^_{}`~");


// var charset =("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-/:;<>?@[]\^_{}`~'");

var passwordGen = "";
  for (var i=0, n= charset.length; i < passwordLength; ++i) {
    passwordGen += charset.charAt(Math.floor(Math.random() + n ));
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


