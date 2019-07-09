// Also known as a shift cipher, the meanings of the letters are shifted by some amount. The ROT13 cipher is where values are shifted by 13 spaces. Write a function that takes a ROT13 encoded string as an input and returs a decoded string. All letters will be uppercase. Do not transform any non-alphabetic characters (spaces, punctuation, etc), but do pass them on. 

function rot13(str) {
  let cipherCharacters = str.split('');
  
  return cipherCharacters.map(function(letters) {
    letters = letters.charCodeAt();
    
    if(letters >= 65 && letters <= 77) {
      letters += 13;
      } else if (letters >= 78 && letters <= 90) {
        letters -= 13;
        }
     return String.fromCharCode(letters);
     }).join('');
}

//Create variable to hold (str), split (str) into characters
//map over and turn letters into integers
//If letters fall in this range add 13
//If letters fall in this range subtract 13
//Turn letters back into characters, join and return
