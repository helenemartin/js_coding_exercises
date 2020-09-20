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

describe("isValidDNA", () => {
  test("return error with an empty argument", () => {
      expect(() => { isValidDNA(); }).toThrow("str is required");
  });
  test("return error with a non string argument", () => {
      expect(() => { isValidDNA(13); }).toThrow("a string is required");
      expect(() => { isValidDNA(['foo']); }).toThrow("a string is required");
      expect(() => { isValidDNA(true); }).toThrow("a string is required");
  });
  test("return true for valid DNA", () => {
      expect(isValidDNA('GATTACA')).toBe(true);
  });
  test("return false for all invalid DNA", () => {
      expect(isValidDNA('BONOBO')).toBe(false);
  });
  test("return false for including invalid DNA", () => {
      expect(isValidDNA('ABACUS')).toBe(false);
  });
  test("return false for lowercase", () => {
      expect(isValidDNA('Gattaca')).toBe(false);
  });
});


describe("isItPrime", () => {
  test("return error with an empty argument", () => {
      expect(() => {
          isItPrime();
      }).toThrow("n is required");
  });
  test("return error with a non number argument", () => {
    expect(() => {
        isItPrime('foo');
    }).toThrow("a number is required");
    expect(() => {
        isItPrime(['foo']);
    }).toThrow("a number is required");
    expect(() => {
        isItPrime(true);
    }).toThrow("a number is required");
  });
  test("return true for prime number", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(13)).toBe(true);
    expect(isItPrime(43)).toBe(true);
    expect(isItPrime(97)).toBe(true);
    expect(isItPrime(613)).toBe(true);
    expect(isItPrime(797)).toBe(true);
  });
  test("return false for 1", () => {
    expect(isItPrime(1)).toBe(false);
  });
  test("return false for 0", () => {
      expect(isItPrime(0)).toBe(false);
  });
  test("return false for non-prime num", () => {
      expect(isItPrime(12)).toBe(false);
      expect(isItPrime(100)).toBe(false);
      expect(isItPrime(9999)).toBe(false);
  });
  test("return false for fractions", () => {
      expect(isItPrime(0.5)).toBe(false);
  });
  test("return false for negative num", () => {
      expect(isItPrime(-7)).toBe(false);
      expect(isItPrime(-0)).toBe(false);  // negative zero!
  });
});

describe("areWeCovered", () => {
  test("return error with an empty argument", () => {
      const staff = [
          { name: "Ruby", rota: ["Tuesday"] },
          { name: "Bob", rota: ["Tuesday"] },
          { name: "Michael", rota: ["Tuesday"] }
      ];
      expect(() => { areWeCovered(); }).toThrow("staff is required");
      expect(() => { areWeCovered('foo'); }).toThrow("an array of staff is required");
      expect(() => { areWeCovered(staff, 3); }).toThrow("day is required");
  });
  test("return true for minimum staff cover on Tuesday", () => {
    const staff = [
        { name: "Ruby", rota: ["Tuesday"] },
        { name: "Bob", rota: ["Tuesday"] },
        { name: "Michael", rota: ["Tuesday"] }
    ];
    expect(areWeCovered(staff, 'Tuesday')).toBe(true);
  });
  test("return true for more than minimum staff cover on Thursday", () => {
    const staff = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Thursday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Ava", rota: ["Monday", "Wednesday", "Thursday", "Friday"] },
        { name: "Eve", rota: ["Sunday", "Tuesday", "Thursday", "Friday"] },
        { name: "Wally", rota: ["Saturday", "Monday", "Thursday", "Friday"] }
    ];
    expect(areWeCovered(staff, 'Thursday')).toBe(true);
  });
  test("return false for empty staff array on Wednesday", () => {
      expect(areWeCovered([], 'Wednesday')).toBe(false);
  });
  test("return false for minimum cover on Wednesday", () => {
    const staff = [
        { name: "Ruby", rota: ["Wednesday"] },
        { name: "Bob", rota: ["Tuesday"] },
        { name: "Michael", rota: ["Tuesday"] }
    ];
    expect(areWeCovered(staff, 'Wednesday')).toBe(false);
  });
  test("return false for no cover on Wednesday", () => {
      const staff = [
          { name: "Ruby", rota: ["Tuesday"] },
          { name: "Bob", rota: ["Tuesday"] },
          { name: "Michael", rota: ["Tuesday"] }
      ];
      expect(areWeCovered(staff, 'Wednesday')).toBe(false);
  });
});