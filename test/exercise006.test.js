const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test ("return the sum of any number that are multiples of 3 or 5", () => {
    const result = sumMultiples([1,3,5]);
    const expected = 8;
    expect (result).toBe(expected);

  });

  test ("return the sum of any decimal numbers that are multiples of 3 and 5", () => {
    const result = sumMultiples([1, 3, 5, 15.0, 2.567, 3.33]);
    const expected = 23;
    expect(result).toBe(expected);

  });


});
