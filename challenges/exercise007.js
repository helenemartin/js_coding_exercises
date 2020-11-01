/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  const numArray = n
    .toString()
    .split("")
    .map(i => {
      return Number(i);
    });
  return numArray.reduce((total, e) => total + e, 0);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) {
    step = 1;
  }
  let rangeArray = [];
  let i = 0;
  for (i = start; i <= end; i += step) {
    rangeArray.push(i);
  }
  return rangeArray;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  const hexPattern = /^#[0-9|A-G|a-g]{6}$/;
  let isValidhex = hexPattern.test(hexStr);
  if (!isValidhex) throw new Error("Not a valid hexadecimal string");
  const rgbStr =
    "rgb(" +
    parseInt("0x" + hexStr.slice(1, 3)) +
    "," +
    parseInt("0x" + hexStr.slice(3, 5)) +
    "," +
    parseInt("0x" + hexStr.slice(5, 7)) +
    ")";
  return rgbStr;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  let winner = "no winner";

  // Checking Rows
  for (let i = 0; i < board.length; i++) {
    let sum = 1;
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] === board[i][j - 1]) {
        sum += 1;
      }
    }
    if (sum === board[i].length) {
      winner = board[i][0];
    }
  }

  // Checking Columns
  if (winner === "no winner") {
    let j = 0;
    let i = 0;
    do {
      let sum = 1;

      for (i = 0; i < board.length - 1; i++) {
        if (board[i][j] === board[i + 1][j]) {
          sum += 1;
        }
        if (sum === board[i].length) {
          winner = board[0][j];
        }
      }
      j++;
    } while (j < board[i].length);
  }

  // Left to Right Diagonal Move
  if (winner === "no winner") {
    let sum = 1;
    let i = 0;
    let j = 0;

    do {
      if (board[i][j] === board[i + 1][j + 1]) {
        sum += 1;
      }
      if (sum === board[i].length) {
        winner = board[i][j];
      }
      i++;
      j++;
    } while (i < board[i].length - 1 && j < board[i].length - 1);
  }

  // Right to Left Diagonal Move
  if (winner === "no winner") {
    let sum = 1;
    let i = 0;
    let j = board[i].length - 1;

    do {
      if (board[i][j] === board[i + 1][j - 1]) {
        sum += 1;
      }
      if (sum === board[i].length) {
        winner = board[i][j];
      }
      i++;
      j--;
    } while (i < board[i].length - 1 && j < board[i].length - 1);
  }

  return winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
