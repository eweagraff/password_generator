// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
];
var userInput;
var chooseUpperCase;
var chooseLowerCase;
var chooseNumbers;
var chooseSpecialCharacter;
console.log(upperCaseArray);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var masterArray = [];
  var userInput = prompt(
    "Please choose a password length between 8 and 128 characters"
  );
  var length = Number(userInput);
  console.log(typeof length);
  console.log(userInput);
  if (!userInput) {
    alert("Value is Required");
    return;
  } else if (isNaN(length)) {
    alert("Value must be a number");
    return;
  } else if (length < 8 || length > 128) {
    alert("must be between 8-128 characters");
  } else if (length >= 8 && length <= 128) {
    chooseUpperCase = confirm("Do you want to include uppercase letters?");
    chooseLowerCase = confirm("Do you want to include lowercase letters?");
    chooseNumbers = confirm("Do you want to include numbers?");
    chooseSpecialCharacter = confirm(
      "Do you want to include any special characters?"
    );
  }
  if (chooseUpperCase === true) {
    masterArray = masterArray.concat(upperCaseArray);
  }
  if (chooseLowerCase === true) {
    masterArray = masterArray.concat(lowerCaseArray);
  }
  if (chooseNumbers === true) {
    masterArray = masterArray.concat(numberArray);
  }
  if (chooseSpecialCharacter === true) {
    masterArray = masterArray.concat(specialCharacterArray);
  }
  console.log(masterArray);

  var randomPassword = "";

  for (let i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * masterArray.length);
    var randomCharacter = masterArray[index];
    randomPassword = randomPassword + randomCharacter;
  }
  console.log(randomPassword);
  return randomPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
