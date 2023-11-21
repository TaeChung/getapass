// Assignment code here
function generatePassword (length, includeUppercase, includeNumbers, includeSymbols) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+{}|:"<>?~';

  let availableChars = lowercaseChars;
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
  // console.log('Initializing JavaScript function...');
  // writePassword(25);
  const passwordLength = 25;
  const includeUppercase = true;
  const includeNumbers = true;
  const includeSymbols = true;

  var password = generatePassword(passwordLength, includeUppercase, includeSymbols, includeNumbers);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// const password = generatePassword(25,true, true, true);
