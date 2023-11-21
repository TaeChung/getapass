// Assignment code here
function generatePassword (length, includeUppercase, includeNumbers, includeSymbols) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+{}|:"<>?~';

  // let availableChars = lowercaseChars;
  let availableChars = '';
  if (includeLowercase) availableChars += lowercaseChars;
  if (includeUppercase) availableChars += uppercaseChars;
  if (includeNumbers) availableChars += numberChars;
  if (includeSymbols) availableChars += symbolChars;

  const availableCharsLength = availableChars.length;
  let password = '';

  for (let i = 0; i < length; i++) {
    const oneIndex = Math.floor(Math.random() * availableCharsLength);
    password += availableChars.charAt(oneIndex);
  }
  return password;
}

// Write password to the #password input


function writePassword() {
  const passwordLength = document.getElementById('length').value;

  const includeLowercase = document.getElementById('lowercase').checked;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeSymbols, includeNumbers);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// const password = generatePassword(25,true, true, true);
