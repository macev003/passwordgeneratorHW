// Assignment Code
var lowerCase = ["a","b","c","d"];
var upperCase = ['A','B','C','D'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var spcChrs = ["#","$","*","!",];


function generatePassword () {
  var length = parseInt(prompt("How long is your password?"));
  if (length < 8 || length > 128){
    alert ("Password must be greater than 8 and less than 128");
    return; 
  }
  var askLower = confirm("Would you like lower case letters?");
  var askUpper = confirm("Would you like upper case letters?");
  var askNum = confirm("Would you like numbers?");
  var askSpc = confirm("Would you like special characters?");
  if (askLower === false && askUpper === false && askNum === false && askSpc === false) {
    alert ("Password must contain at least one type of character");
    return;
  }
  var makePassword = [];
  var passwordOpt = [];
  if (askLower === true){
    passwordOpt = passwordOpt.concat(lowerCase);
   
  }
  if (askUpper === true){
    passwordOpt = passwordOpt.concat(upperCase);
  }
  if (askNum === true){
    passwordOpt = passwordOpt.concat(numbers);
  }
  if (askSpc === true){
    passwordOpt = passwordOpt.concat(spcChrs);
  }
  for (var i = 0; i <length; i++){
    var item = passwordOpt[Math.floor(Math.random() * passwordOpt.length)];
    makePassword.push(item); 
  }

  console.log(makePassword);

  return makePassword.join("");

}













var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
