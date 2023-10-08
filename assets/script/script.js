
// prompt user for parameters and save in variables

var length = prompt("enter password length at least 8 characters long");

var upperCase = confirm("Does your password require uppercase letters?");

var lowerCase = confirm("Does your password require lowercase letters?");
  
var numbers = confirm("Does your password require numbers?");

var symbols = confirm("Does your password require special characters?");

// console.log(length);

// saves button w/ID=generate into variable

var generateBtn = document.querySelector("#generate");


// var length, upperCase, lowerCase, numbers, symbols

// generate password function:

function generatePassword(){

// initialize charset variable

  let charSet = '';

// if statements returning boolean value, which either adds a new charSet or not. 

  if (upperCase){
    charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  } 

  if (lowerCase){
    charSet += 'abcdefghijklmnopqrstuvwxyz'
  } 

  if (numbers){
    charSet += '0123456789'
  } 

  if (symbols){
    charSet += '!@#$%^&*?'
  } 

// initialize password array 

  let pwArray = [];

// while the array length is less than the user input length, loop will process new characters to add to the empty character set. 

  while (pwArray.length < length){

    const char = charSet[Math.floor(math.random() * charset.length)];

    if (!noDups || !pwArray.includes(char)) {
      pwArray.push(char)
    }

  }

  // return the password: 

  return pwArray.join('');

}

function writePassword() {

// reference all input variables

// generate a random password 

var password = generatePassword();


  var passwordText = document.querySelector("#password");

// render password on page.

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

