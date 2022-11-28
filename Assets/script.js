// assignment Code
var generateBtn = document.querySelector("#generate");

// define the length range and return a random integer between the range
function lengthCriteria () {
  // define empty arrays to store value inputs
  var minInputs = new Array();
  var maxInputs = new Array();
  // prompt minimum length entry
  function minLength() {
    // default value is 8
    let min = (prompt("Please enter the minimum length of the password:", "8"));
    // prevent overwriting new inputs
    minInputs.push(min);
    // check that the input is valid, otherwise run the function again
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
    // return last value in the array of inputs
    return minInputs[minInputs.length - 1];
  };
  // prompt maximum length entry
  function maxLength() {
    // default value is 128
    let max = (prompt("Please enter the maximum length of the password:","128"));
    // prevent overwriting new inputs
    maxInputs.push(max);
    // check that the input is valid, otherwise run the function again
    if (max === null) {
      alert("Error: Must input a maximum length.")
      maxLength();
    } else if (isNaN(max)) {
      alert("Error: Input must be numeric.");
      maxLength();
    } else if (max > 128) {
      alert("Error: Password must be less than 128 characters.");
      maxLength();
    } else if (max < 8) {
      alert("Error: Maximum length can not be less than minimum length.");
      maxLength();
    };
    // return last value in the array of inputs
    return maxInputs[maxInputs.length - 1];
  };
  // run the sub-fuctions minLength() and maxLength()
  var min = minLength();
  var max = maxLength();
  // return a random integer in the specified range
  min = Math.ceil(min);
  max = Math.floor(max);
  passwordLength = Math.floor(Math.random() * (max - min + 1) + min);
  // return the random integer
  return passwordLength;
};

// determine the characters critera
function charactersCriteria () {
  // define the four types of characters
  var lowercaseCharacters = ["abcdefghijklmnopqrstuvwxyz"];
  var uppercaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numericCharacters = ["0123456789"];
  var specialCharacters = ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
  // define and clear any existing character list
  var charactersList = "";
  // initialize series of confirmation to determine which characters to include
  // combine the respective array with the character list if it is accepted
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
  // return the character list
  return charactersList;
};

// generate a unique password
function generatePassword() {
  // clear any existing password
  var password="";
  // run the functions to determine the length and characters of the password
  var passwordLength = lengthCriteria()
  var charactersList =  charactersCriteria()
  // check that at least one character type is included
  if (charactersList.length === 0) {
    alert("Error: Must select at lease one type of character.");
    charactersCriteria();
  };
  // generate a unique series of characters based on the length and characters criteria
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * charactersList.length);
    password += charactersList.substring(randomNumber, randomNumber +1);
  }
  // return the unique password used to paste into the output text area
  return password;
}

// write password to the #password input
function writePassword() {
  // define the location to output the password
  var passwordText = document.querySelector("#password");
  // run the function to generate a unique password
  var password = generatePassword();
  // paste the password in the textarea
  passwordText.value = password;
  // alert the generated password and the length of the password
  alert("\nPassword: \n" + password + "\n \nLength: " + password.length + " characters")
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
