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
  test ("return 0 when no numbers are multiples of 3 and 5", () => {
    expect(sumMultiples([1, 2, 4])).toBe(0);

  });
  test ("return error with an empty array", () => {
    expect(sumMultiples([1, 2, 4])).toBe(0);

  });
  test ("return 0 when no numbers are multiples of 3 and 5", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

  });
});
