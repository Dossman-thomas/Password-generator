// Assignment Code

// prompt user for password length (8 - 128 characters)

var pwLength = prompt("enter password length at least 8 characters long", "");

// confirm if user wants uppercase or lowercase

  var upperCase = confirm("Does your password require uppercase letters?");

  var lowerCase = confirm("Does your password require lowercase letters?");

// confirm if user wants numeric password
  
  var numbers = confirm("Does your password require numbers?");

// confirm if user wants special characters

  var specialChars = confirm("Does your password require special characters?");

var generateBtn = document.querySelector("#generate");

pwResult = "";

// Write password to the #password input
function generatePassword(pwLength, upperCase, lowerCase, numbers, specialChars){

  for (var i = 0 ; i < pwLength; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
}


function writePassword() {

  // var password = generatePassword(pwLength, upperCase, lowerCase, numbers, specialChars){

  // }

  var passwordText = document.querySelector("#password");



  var charSet = "";

  if (upperCase){

    charSet.push(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"])

  } 
  
  if (lowerCase){

    charSet.push(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])

  }

// Math.floor(math.random() * length of some kind)

// process...(4 confirmExpressionConditionals)

function confirmExpressionConditions(){

  if (upperCase){
    // something
    } else {
    // something else
    }
    
    if (lowerCase){
      // something
    } else {
      // something else
    }
    
    if (numbers){
      // something
    } else {
      // something else
    }
    
    if (specialChars){
      // something
    } else {
      // something else
    }

}



// return password


// renders the password in the body:

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
