// This is the generate assigned variable
var generateBtn = document.querySelector("#generate");

// These are the passwords and password input responses. 
function writePassword(create) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt("Password must have at least 8 characters. Please tell us how many you would like, greater than 8.");
  if (passwordLength < 8) {
    alert("Please choose a password of at least 8 characters. Please start over.");
    return;
  }

  var wantsLowercase = confirm("Would you like lowercase letters? Select ok for yes, cancel for no");
  if (wantsLowercase) {
    alert("Lowercase letters included. Select ok to go to the next step");
  }
  else {
    alert("Not including lowercase letters");
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


