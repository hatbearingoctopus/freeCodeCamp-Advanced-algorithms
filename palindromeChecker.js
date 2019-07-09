// Return true if the given string is a palindrome, otherwise return false. A palindrome is the same forwards as backwards. Remove all non-alphanumeric characters and turn everything into the same case.

function palindrome (str) {
  return str.toLowerCase().replace(/[\W_]/g, ") === str.toLowerCase().replace (/[\W_]/g, ").split('').reverse('').join('');
}

//toLowerCase() - to turn everything lower case
//replace()/regular expression - to replace non-alphanumerics
//split('') - to split each character on the gap
//reverse('') - reverse the string
//join('') - to re-join the reversed string
// === to compare first string to reversed string
