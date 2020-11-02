const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

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

describe("sumMultiples", () => {
  test("return the sum of any number that are multiples of 3 or 5", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
  });

  test("return the sum of any decimal numbers that are multiples of 3 and 5", () => {
    const result = sumMultiples([1, 3, 5, 15.0, 2.567, 3.33]);
    const expected = 23;
    expect(result).toBe(expected);
  });
  test("return 0 when no numbers are multiples of 3 and 5", () => {
    expect(sumMultiples([1, 2, 4])).toBe(0);
  });
  test("return error with an empty array", () => {
    expect(sumMultiples([1, 2, 4])).toBe(0);
  });
  test("return 0 when no numbers are multiples of 3 and 5", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");
  });
});

describe(isValidDNA, () => {
  test("if string type parameter not passed return false", () => {
    expect(isValidDNA(2525)).toBe(false);
    expect(isValidDNA(["sas", "sasa"])).toBe(false);
  });

  test("if matching DNA string only return true", () => {
    expect(isValidDNA("CGGATTTTTCCCTTT")).toBe(true);
    expect(isValidDNA("TGACTAACTTT")).toBe(true);
    expect(isValidDNA("TGTT")).toBe(true);
  });
  test("if anything other than matching DNA string return false", () => {
    expect(isValidDNA("CGGATT  hyEMRRRTTTC CCTTT")).toBe(false);
    expect(isValidDNA("TGA C;;;;444TAACTTT")).toBe(false);
    expect(isValidDNA("TGT31387dddT")).toBe(false);
  });
});

describe(getComplementaryDNA, () => {
  test("return not valid DNA string error if not valid DNA string", () => {
    expect(() => {
      getComplementaryDNA("CGGATT  hyEMRRRTTTC CCTTT");
    }).toThrow("Not a valid DNA string");
  });
  test("if valid DNA string return complementary string", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("TGAC")).toBe("ACTG");
    expect(getComplementaryDNA("TGACTGACACTG")).toBe("ACTGACTGTGAC");
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
      isItPrime("foo");
    }).toThrow("a number is required");
    expect(() => {
      isItPrime(["foo"]);
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
    expect(isItPrime(-0)).toBe(false);
  });
});

describe("areWeCovered", () => {
  test("return error with an empty argument", () => {
    const staff = [
      { name: "Ruby", rota: ["Tuesday"] },
      { name: "Bob", rota: ["Tuesday"] },
      { name: "Michael", rota: ["Tuesday"] }
    ];
    expect(() => {
      areWeCovered();
    }).toThrow("staff is required");
    expect(() => {
      areWeCovered("foo");
    }).toThrow("an array of staff is required");
    expect(() => {
      areWeCovered(staff, 3);
    }).toThrow("day is required");
  });
  test("return true for minimum staff cover on Tuesday", () => {
    const staff = [
      { name: "Ruby", rota: ["Tuesday"] },
      { name: "Bob", rota: ["Tuesday"] },
      { name: "Michael", rota: ["Tuesday"] }
    ];
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
  });
  test("return true for more than minimum staff cover on Thursday", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Thursday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Ava", rota: ["Monday", "Wednesday", "Thursday", "Friday"] },
      { name: "Eve", rota: ["Sunday", "Tuesday", "Thursday", "Friday"] },
      { name: "Wally", rota: ["Saturday", "Monday", "Thursday", "Friday"] }
    ];
    expect(areWeCovered(staff, "Thursday")).toBe(true);
  });
  test("return false for empty staff array on Wednesday", () => {
    expect(areWeCovered([], "Wednesday")).toBe(false);
  });
  test("return false for minimum cover on Wednesday", () => {
    const staff = [
      { name: "Ruby", rota: ["Wednesday"] },
      { name: "Bob", rota: ["Tuesday"] },
      { name: "Michael", rota: ["Tuesday"] }
    ];
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });
  test("return false for no cover on Wednesday", () => {
    const staff = [
      { name: "Ruby", rota: ["Tuesday"] },
      { name: "Bob", rota: ["Tuesday"] },
      { name: "Michael", rota: ["Tuesday"] }
    ];
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });
});
