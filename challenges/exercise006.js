/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let total = 0;
  arr.forEach(n => {
    if (n % 3 === 0 || n % 5 === 0) {
      total += n;
    }
  });
  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") return false;
  const isValid = !/[^GCTA]/.test(str);
  return isValid;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (!isValidDNA(str)) throw new Error("Not a valid DNA string");
  const compString = { A: "T", T: "A", G: "C", C: "G" };
  const dnaPattern = /[ATCG]/g;
  let sequence = str.replace(dnaPattern, function(dna) {
    return compString[dna];
  });
  return sequence;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number") throw new Error("a number is required");

  if (Math.sign(n) === -1 || Math.sign(n) === 0) return false;
  if (n <= 1) return false;
  if (n === 2) return true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number") throw new Error("a number is required");
  if (Math.sign(n) === -1 || Math.sign(n) === 0 || n % 1 !== 0)
    throw new Error("n must be a positive integer");
  if (fill === undefined) throw new Error("fill is required");

  const arr = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(fill);
    }
    arr.push(row);
  }
  return arr;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (!Array.isArray(staff)) throw new Error("an array of staff is required");
  if (day === undefined) throw new Error("day is required");
  if (typeof day !== "string") throw new Error("day is required");
  let count = 0;
  staff.forEach(function(staffMember) {
    // each row is a staff object
    if (staffMember.rota.find(d => d === day) !== undefined) {
      count++;
    }
  });
  return count >= 3;
};
describe("createMatrix", () => {
  test("return error with empty arguments", () => {
    expect(() => {
      createMatrix();
    }).toThrow("n is required");
    expect(() => {
      createMatrix(3);
    }).toThrow("fill is required");
    expect(() => {
      createMatrix("foo");
    }).toThrow("a number is required");
  });
  test("return error if n is not a positive integer", () => {
    expect(() => {
      createMatrix(0);
    }).toThrow("n must be a positive integer");
    expect(() => {
      createMatrix(-2);
    }).toThrow("n must be a positive integer");
    expect(() => {
      createMatrix(3.5);
    }).toThrow("n must be a positive integer");
  });
  test("return array with one element", () => {
    const array1x1 = [["foo"]];
    expect(createMatrix(1, "foo")).toEqual(array1x1);
  });
  test("return array with multiple elements", () => {
    const array2x2 = [
      ["foo", "foo"],
      ["foo", "foo"]
    ];
    expect(createMatrix(2, "foo")).toEqual(array2x2);
  });
});

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
