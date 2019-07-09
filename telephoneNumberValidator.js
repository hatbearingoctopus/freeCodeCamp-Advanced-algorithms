// Return true if the passed string looks like a valid US phone number. The following are examples of valid formats for US number:
// 555-555-5555, (555)555-5555, (555) 555-5555, 555 555 5555, 5555555555, 1 555 555 5555
// The area code is required> If the country code is provided you must confirm that the country code is 1. Return tru if the str is a valid US number; otherwise return false.

function telephoneCheck (str) {
  let validPhoneNumber = /^(1\s?)?(\(\d{3}\)|d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return validPhoneNumber.test(str);
  }
  
  //Create variable to store regular expression that will check for validity of input string
  //Use test to compare string to regular expression
  //return for result
  
  // test() - method tests for a match in a string. This method returns true with a match; otherwise false.
  // regExpObject.test(string)
