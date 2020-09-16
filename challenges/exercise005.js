const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const i = nums.findIndex(element => element == n);
  return (i === -1 || i +1 >= nums.length) ? null : nums[i + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const freq = {
    '1': 0,
    '0': 0
  };
  for (let i = 0; i < str.length; i++){
    const char = str[i];
    freq[char] += 1;
  }
  return freq;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseFloat(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let result = 0;
  arrs.map((arr) => {
    result += arr.reduce((total, n) => total +n);
  });
  return result;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;
  [arr[0], arr[arr.length - 1]] = [arr[arr.length -1], arr[0]];
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let found = false;
    for (let key in haystack) {
      const f = haystack[key];
      if (typeof f === 'string' && f.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
        found = true;
      }

    }
  return found;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
