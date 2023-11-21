// Assignment code here
function generatePassword (length, includeUppercase, includeNumbers, includeSymbols) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+{}|:"<>?~';

  letavailableChars = lowercaseChars;
  if (includeUppercase) availableChars += uppercaseChars;
  if (includeNumbers) availableChars += numberChars;
  if (includeSymbols) availableChars += symbolChars;

  const availableCharsLength = availableChars.length;
  let password = '';

  for (let i = 0; i < length; i++) {
    const oneIndex = Math.floor(math.oneIndex() * availableCharsLength);
    password += availableChars.charAt(oneIndex);
  }
  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength, includeUppercase, includeSymbols, includeNumbers);
  var passwordText = document.querySelector("password");

  const passwordLength = 25;
  const includeUppercase = true;
  const includeNumbers = true;
  const includeSymbols = true;

  passwordText.value = password;

}



// const password = generatePassword(25,true, true, true);
// console.log(password);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);