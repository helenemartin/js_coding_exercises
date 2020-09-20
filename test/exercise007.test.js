const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("return error with an empty argument", () => {
      expect(() => { sumDigits(); }).toThrow("n is required");
  });
  test("return same number for single digit", () => {
      expect(sumDigits(2)).toBe(2);
  });
  test("return sum of multiple digits", () => {
      expect(sumDigits(123)).toBe(6);
      expect(sumDigits(49785)).toBe(33);
      expect(sumDigits(1206)).toBe(9);
  });
});

describe("createRange", () => {
  test("return error with an empty or no number arguments", () => {
      expect(() => { createRange(); }).toThrow("start is required");
      expect(() => { createRange(['foo']); }).toThrow("a start number is required");
      expect(() => { createRange(true); }).toThrow("a start number is required");
      expect(() => { createRange(4, true); }).toThrow("an end number is required");
  });
  test("return array for two arguments", () => {
    expect(createRange(3, 5)).toEqual([3, 4, 5]);
  });
  test("return array for three arguments", () => {
    expect(createRange(3, 5, 1)).toEqual([3, 4, 5]);
  });
  test("return array with specified step for three arguments", () => {
    expect(createRange(2, 8, 2)).toEqual([2, 4, 6, 8]);
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(14, 49, 7)).toEqual([14, 21, 28, 35, 42, 49]);
  });
  test("return array where step does not reach end of range", () => {
      const expected = [3, 5, 7, 9, 11];
      expect(createRange(3, 12, 2)).toEqual(expected);
  });
});