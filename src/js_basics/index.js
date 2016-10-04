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
  const test = str.toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (test[i] !== test[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

export const nestedSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    } else if (Array.isArray(arr[i])) {
      sum += nestedSum(arr[i]);
    }
  }
  return sum;
};
