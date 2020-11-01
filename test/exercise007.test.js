const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("return error with an empty argument", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
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

describe(createRange, () => {
  it("returns a range of arrays with inclusive start and end", () => {
    const result = createRange(1, 3, 1);
    const expected = [1, 2, 3];
    expect(result).toEqual(expected);
  });
  it("returns a range of arrays with inclusive start and end and correct step", () => {
    const result = createRange(3, 11, 2);
    const expected = [3, 5, 7, 9, 11];
    expect(result).toEqual(expected);
  });
  it("returns a range of arrays with inclusive start and end and step optional", () => {
    const result = createRange(1, 10);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(result).toEqual(expected);
  });
});

describe("getScreentimeAlertList", () => {
  test("return error with an empty arguments", () => {
    expect(() => {
      getScreentimeAlertList();
    }).toThrow("users is required");
  });
  test("return simple array of username with over 100 minutes screentime on date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 }
          }
        ]
      }
    ];
    expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
  });
  test("return array of usernames with over 100 minutes screentime on date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 }
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 }
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 }
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 }
          }
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 }
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 }
          }
        ]
      }
    ];
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
  });
  test("return array of usernames with over 100 minutes screentime on date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 }
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 }
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 }
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 }
          }
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 45, whatsApp: 20, facebook: 0, safari: 10 }
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 35, whatsApp: 80, facebook: 0, safari: 16 }
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 90, facebook: 0, safari: 31 }
          }
        ]
      },
      {
        username: "agarcia4",
        name: "Ana Garcia",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { tikTok: 65, whatsApp: 40, instagram: 32, safari: 10 }
          },
          {
            date: "2019-06-13",
            usage: { tikTok: 120, whatsApp: 15, instagram: 100, safari: 0 }
          },
          {
            date: "2019-06-14",
            usage: { tikTok: 90, whatsApp: 32, instagram: 45, safari: 31 }
          }
        ]
      }
    ];
    expect(getScreentimeAlertList(users, "2019-06-13")).toEqual([
      "sam_j_1989",
      "agarcia4"
    ]);
  });
});

describe(hexToRGB, () => {
  test("Returns hexadecimal string required if parameter string is not valid ", () => {
    expect(() => {
      hexToRGB("hsd7337");
    }).toThrow("Not a valid hexadecimal string");
  });
  test("Returns RGB format for valid hexadecimal string", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#800080")).toBe("rgb(128,0,128)");
  });
});

describe(findWinner, () => {
  test("Returns correct winner for given array board on any line horizontal", () => {
    expect(
      findWinner([
        ["X", "X", "X"],
        ["0", null, "0"],
        ["0", null, "0"]
      ])
    ).toBe("X");
    expect(
      findWinner([
        ["X", null, "0"],
        ["0", "0", "0"],
        ["X", null, "X"]
      ])
    ).toBe("0");
    expect(
      findWinner([
        ["X", null, "0"],
        ["0", null, "0"],
        ["X", "X", "X"]
      ])
    ).toBe("X");
    expect(
      findWinner([
        [null, null, null],
        ["0", null, "0"],
        ["X", "X", "X"]
      ])
    ).toBe("X");
  });
  test("it returns 0 if 0 player has the row complete", () => {
    const obj1 = [
      [null, null, "0"],
      ["X", "0", "0"],
      ["0", "0", "0"]
    ];
    const obj2 = [
      [null, null, "0"],
      ["0", "0", "0"],
      ["X", "0", "0"]
    ];
    const obj3 = [
      ["0", "0", "0"],
      ["X", "0", "0"],
      ["X", "0", "0"]
    ];
    expect(findWinner(obj1)).toBe("0");
    expect(findWinner(obj2)).toBe("0");
    expect(findWinner(obj3)).toBe("0");
  });
});
