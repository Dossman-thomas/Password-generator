
// prompt user for parameters and save in variables

// form in html or save variables though prompt/conrim methods.  either way, it's global variables.

var length = prompt("enter password length at least 8 characters long");

var upperCase = confirm("Does your password require uppercase letters?");

var lowerCase = confirm("Does your password require lowercase letters?");
  
var numbers = confirm("Does your password require numbers?");

var symbols = confirm("Does your password require special characters?");

// saves button w/ID=generate into variable

var generateBtn = document.querySelector("#generate");

// generate password function:


function generatePassword(){

// initialize charset variable

  var charSet = '';

// if statements returning boolean value, which either adds a new charSet or not.

// generate a random password 

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

    const char = charSet[Math.floor(Math.random() * charSet.length)];

    pwArray.push(char)

  }



  // return the password: 

  return pwArray.join('');

}




function writePassword() {

var password = generatePassword();



  var passwordText = document.querySelector("#password");

// render password on page.

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

