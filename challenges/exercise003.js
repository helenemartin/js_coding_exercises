function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let square = [];
  nums.map((num) => square.push(Math.pow(num, 2)));
  return square;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
    let word = words[0].toLowerCase();
    for (let i = 0; i < words.length; i++) {
      word += words[i].charAt(0).toUpperCase() + words[i].slice(0);
    }
    return word;
}

function getTotalSubjects(people) {
  let subjects = 0;
  people.forEach(function (p) {
    subjects += p.subjects.length;
  });
  return subjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let result = arr1.filter(element => arr2.includes(element)).sort();
  return [...new Set(result)];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
