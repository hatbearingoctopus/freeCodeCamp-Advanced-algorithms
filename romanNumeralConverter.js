// Convert the given number into a roman numeral. All roman-numeral answers should be provided in uppercase.

function convertToRoman(num) {
  let roman = '';
  let romanCharacters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  for (let i = 0; i < numbers.length; i ++) {
    while(num >= numbers[i]) {
      roman = roman + romanCharacters[i];
      num = num - numbers[i];
    }
  }
  return roman;
}

//Create empty string to store result
//Create array of all possible roman numeral characters
//Create array of cooresponding numbers
//Use for loop to iterate through numbers
//While num >= current numbers[i]
//Adds its equivalent roman numeral character to the roman variable
//Subtract value from the original number to end loop
//Return result
