
// saves button w/ID=generate into variable:

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button: 

generateBtn.addEventListener("click", writePassword);

//initialize variables: 
var pwArray = [];
var upperCase;
var lowerCase;
var numbers;
var symbols;
var charUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charLowerCase = 'abcdefghijklmnopqrstuvwxyz';
var charNumbers = '0123456789';
var charSymbols = '!@#$%^&*?';

// generate password function:

function generatePassword(){

// enforce length min and max parameters

// initialize max and mins: 

var pwMin = 8;

var pwMax = 128;

var pwLength = parseInt(prompt("Enter password length between 8 to 128 characters long."));

if (pwLength < pwMin || pwLength > pwMax) {

  alert("Password length must be between 8 and 128 characters long.");

  // console.log(pwLength);

  return generatePassword();
}

if (isNaN(pwLength)){
return;
}

// prompt user for parameters and save in variables:

  upperCase = confirm("Does your password require uppercase letters?");

  lowerCase = confirm("Does your password require lowercase letters?");
    
  numbers = confirm("Does your password require numbers?");

  symbols = confirm("Does your password require special characters?");


// initialize charset variable:

  var charSet = '';

// if statements returning boolean value, which either adds a new charSet or not.

  if (upperCase){
    charSet += charUpperCase;
  } 

  if (lowerCase){
    charSet += charLowerCase;
  } 

  if (numbers){
    charSet += charNumbers;
  } 

  if (symbols){
    charSet += charSymbols;
  }

  if (!upperCase && !lowerCase && !numbers && !symbols){
    alert("Inadequate parameters set. Please try again.");
  }
  
  let finalPassword = givePassword(charSet, pwLength);

  // return the password: 

  return finalPassword.join('');

}

function givePassword (charSet, pwLength){
  
  // initialize password array 

  pwArray = [];

// while the array length is less than the user input length, loop will process new characters to add to the empty character set. 

  while (pwArray.length < pwLength){

    const char = charSet[Math.floor(Math.random() * charSet.length)];

    pwArray.push(char);
  }

  if (upperCase){
    pwArray[0] = charUpperCase[Math.floor(Math.random() * charUpperCase.length)];
  }

  if (lowerCase){
    pwArray[2] = charLowerCase[Math.floor(Math.random() * charLowerCase.length)];
  }

  if (numbers){
    pwArray[4] = charNumbers[Math.floor(Math.random() * charNumbers.length)];
  }

  if (symbols){
    pwArray[6] = charSymbols[Math.floor(Math.random() * charSymbols.length)];
  }
  // return pwArray

    return pwArray;
  }


// function checkCharacters (charSet, pwLength){
  
//   // check if parameter is included depending on true booleans from if statements 
//   // call function checkCharacters until true
//   console.log(pwArray);
//   console.log(!pwArray.includes(charUpperCase));

//   if (!pwArray.includes(charUpperCase) || !pwArray.includes(charLowerCase) || !pwArray.includes(charNumbers) || !pwArray.includes(charSymbols)){
//     console.log("hi");
//     givePassword (charSet, pwLength);
//   }

// }


function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");
    
  // render password on page.

  passwordText.value = password;

}



