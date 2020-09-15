function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(element => element < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const infinitive = "to ";
  return words.filter(element => element.slice(0, 3) === infinitive);
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (num) {
    return Number.isInteger(num);

  });
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(element => element.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(function (num) {
    return Math.round(Math.sqrt(num)*100) / 100;

  });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter ( element => element.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(element => Math.max(...element));
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
