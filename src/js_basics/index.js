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
  let i = 0;
  let best = '';
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      if (best.length === 0) {
        best = arr[i];
      }
      if (best.length < arr[i].length) {
        best = arr[i];
      }
    }
  }
  return best;
};

export const reverseString = (str) => {
  return str.split('').reverse().join('');
};

export const isPalindrome = (str) => {
  const reverse = reverseString(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === reverse[str.length - i]) {
      return false;
    }
  }
  return true;
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
};
