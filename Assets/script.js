// Assignment Code
var generateBtn = document.querySelector("#generate");

function lengthCriteria () {
  var minInputs = new Array();
  var maxInputs = new Array();
  function minLength() {
    let min = (prompt("Please enter the minimum length of the password:", "8"));
    minInputs.push(min);
    if (min === null) {
      alert("Error: Must input a minimum length.");
      minLength();
    } else if (isNaN(min)) {
      alert("Error: Input must be numeric.");
      minLength();
    } else if (min < 8) {
      alert("Error: Password must have at least 8 characters.");
      minLength();
    } else if (min > 128) {
      alert("Error: Password can not be more than 128 characters.");
      minLength();
    };
    return minInputs[minInputs.length - 1];
  };
  function maxLength() {
    let max = (prompt("Please enter the maximum length of the password:","128"));
    maxInputs.push(max);
    if (max === null) {
      alert("Error: Must input a maximum length.")
      maxLength();
    } else if (isNaN(max)) {
      alert("Error: Input must be numeric.");
      maxLength();
    } else if (max > 128) {
      alert("Error: Password must be less than 128 characters.");
      maxLength();
    } else if (max <= 8) {
      alert("Error: Maximum length can not be less than minimum length.");
      maxLength();
    };
    return maxInputs[maxInputs.length - 1];
  };
  var min = minLength();
  var max = maxLength();
  min = Math.ceil(min);
  max = Math.floor(max);
  passwordLength = Math.floor(Math.random() * (max - min + 1) + min);
  return passwordLength;
};

function charactersCriteria () {
  var lowercaseCharacters = ["abcdefghijklmnopqrstuvwxyz"];
  var uppercaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numericCharacters = ["0123456789"];
  var specialCharacters = ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
  var charactersList = "";
  if (confirm("\nInclude lowercase characters?\n\n'Cancel' for 'No', 'OK' for 'Yes'")) {
    charactersList = charactersList.concat(lowercaseCharacters);
  };
  if (confirm("\nInclude uppercase characters?\n\n'Cancel' for 'No', 'OK' for 'Yes'")) {
    charactersList = charactersList.concat(uppercaseCharacters);
  };
  if (confirm("\nInclude numeric characters?\n\n'Cancel' for 'No', 'OK' for 'Yes'")) {
    charactersList = charactersList.concat(numericCharacters);
  };
  if (confirm("\nInclude special characters? (i.e: !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~)\n\n'Cancel' for 'No', 'OK' for 'Yes'")) {
    charactersList = charactersList.concat(specialCharacters);
  };
  return charactersList;
};

// Write password to the #password input
function generatePassword() {
  var password="";
  var passwordLength = lengthCriteria()
  var charactersList =  charactersCriteria()
  if (charactersList.length === 0) {
    alert("Error: Must select at lease one type of character.");
    charactersCriteria();
  };
  console.log(charactersList)
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * charactersList.length);
    password += charactersList.substring(randomNumber, randomNumber +1);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
  alert("\nPassword: \n" + password + "\n \nLength: " + password.length + " characters")
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
