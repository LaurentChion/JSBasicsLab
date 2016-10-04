export const isNumberEven = (i) => {
  if (i % 2 === 0) {
    return true;
  }
  return false;
};

export const getFileExtension = (str) => {
  const res = str.split('.');
  if (res.length < 2) {
    return false;
  }
  return res[res.length - 1];
};

export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array
};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
};
