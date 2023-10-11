
// saves button w/ID=generate into variable:

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button: 

generateBtn.addEventListener("click", writePassword);

// generate password function:

function generatePassword(){

// enforce length min and max parameters

// initialize max and mins: 

var pwMin = 8;

var pwMax = 128;

var pwLength = parseInt(prompt("Enter password length between 8 to 128 characters long."));

if (pwLength < pwMin || pwLength > pwMax) {

  alert("Password length must be between 8 and 128 characters long.");

  console.log(pwLength);

  return generatePassword();
}

if (isNaN(pwLength)){
return;
}



// prompt user for parameters and save in variables:

  var upperCase = confirm("Does your password require uppercase letters?");

  var lowerCase = confirm("Does your password require lowercase letters?");
    
  var numbers = confirm("Does your password require numbers?");

  var symbols = confirm("Does your password require special characters?");


// initialize charset variable:

  var charSet = '';

// if statements returning boolean value, which either adds a new charSet or not.

  if (upperCase){
    charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } 

  if (lowerCase){
    charSet += 'abcdefghijklmnopqrstuvwxyz';
  } 

  if (numbers){
    charSet += '0123456789';
  } 

  if (symbols){
    charSet += '!@#$%^&*?';
  }
  

  if (!upperCase && !lowerCase && !numbers && !symbols){
    alert("Inadequate parameters set. Please try again.");
  }
  
  let finalPassword = checkCharacters(charSet, pwLength);
  // return the password: 

  return finalPassword.join('');

}

function checkCharacters (charSet, pwLength){
  // initialize password array 

  let pwArray = [];

// while the array length is less than the user input length, loop will process new characters to add to the empty character set. 

  while (pwArray.length < pwLength){

    const char = charSet[Math.floor(Math.random() * charSet.length)];

    pwArray.push(char);

  }
  
  // check if parameter is included depending on true booleans from if statements 
  // call function checkCharacters until true
  // return pwArray >

  return pwArray;
}


function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");
    
  // render password on page.

  passwordText.value = password;

}



