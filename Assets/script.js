// Assignment Code
var generateBtn = document.querySelector("#generate");

function lengthSelection () {
  function minLength() {
    let min = (prompt("Please enter the minimum length of the password:", "8"));
    if (min === null) {
      alert("Error: Must input a minimum length.")
      maxLength();
    } else if (isNaN(min)) {
      alert("Error: Input must be numeric.");
      minLength();
    } else if (min < 8) {
      alert("Password must have at least 8 characters.");
      minLength();
    } else if (min > 128) {
      alert("Password can not be more than 128 characters.");
      minLength();
    };
    return min;
  };
  function maxLength() {
    let max = (prompt("Please enter the maximum length of the password:","128"));
    if (max === null) {
      alert("Error: Must input a maximum length.")
      maxLength();
    } else if (isNaN(max)) {
      alert("Error: Input must be numeric.");
      maxLength();
    } else if (max > 128) {
      alert("Password must be less than 128 characters.");
      maxLength();
    } else if (max <= 8) {
      alert("Maximum length can not be less than minimum length.");
      maxLength();
    };
    return max;
  };
  var min = minLength();
  var max = maxLength();
  min = Math.ceil(min);
  max = Math.floor(max);
  passwordLength = Math.floor(Math.random() * (max - min + 1) + min);
  return passwordLength;
};

function characterSelection () {
  var lowercaseCharacters = ["abcdefghijklmnopqrstuvwxyz"];
  var uppercaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numericCharacters = ["0123456789"];
  var specialCharacters = ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
  var characterList = "";
  if (confirm("Include lowercase characters?")) {
    characterList = characterList.concat(lowercaseCharacters);
  };
  if (confirm("Include uppercase characters?")) {
    characterList = characterList.concat(uppercaseCharacters);
  };
  if (confirm("Include numeric characters?")) {
    characterList = characterList.concat(numericCharacters);
  };
  if (confirm("Include special characters?")) {
    characterList = characterList.concat(specialCharacters);
  };
  return characterList;
};

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  var password = generatePassword();
  passwordText.value = password;
}

// Write password to the #password input
function generatePassword() {
  var password="";
  var passwordLength = lengthSelection()
  var characterList =  characterSelection()
  if (characterList.length === 0) {
    alert("Error: Must select at lease one type of character!");
    characterSelection();
  };
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characterList.length);
    password += characterList.substring(randomNumber, randomNumber +1);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
