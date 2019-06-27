/* A uniform random elem from {1, -1} */
const randomSign = () => Math.random() < .5 ? -1 : 1;

const randomIn = (low, hi) => Math.round(Math.random() * (hi - low)) + low;

/* returns the sign of n (1 or -1) */
const sign = (n) => n < 0 ? -1 : 1;

/* an array of length length filled with value */
const arrayOf = (length, value) => Array.from(new Array(length)).map(() => value);

/* returns an array of size at least length padded with defaultValue */
const padder = (length, defaultValue) => {
  const pad = arrayOf(length, defaultValue);

  return {
    /* fills the first elements with defaultValue if size of arr is less than length */
    start: arr => {
      if (arr.length >= length) {
        return arr;
      } else {
        return pad.concat(arr).slice(-length);
      }
    },
    /* fills the first elements with defaultValue if size of arr is less than length */
    end: arr => {
      if (arr.length >= length) {
        return arr.slice(-length);
      } else {
        return arr.concat(pad).slice(0, length);
      }
    }
  };
};

/* dot product of two arrays */
const dotProduct = (arr1, arr2) => arr1.reduce((acc, curr, i) => acc + arr2[i] * curr, 0);

/* sum of array elements */
const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

/* returns a copy of array with reversed elements */
const reverse = arr => arr.reduce((acc, curr) => [curr].concat(acc), []);

const trimLeft = (arr, value) =>
  arr.reduce((acc, curr) => curr === value && acc.length === 0 ? [] : acc.concat([curr]), []);
