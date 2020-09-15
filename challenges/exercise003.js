function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => Math.pow(num,2));
}

function camelCaseWords(words) {
  if (words === undefined) throw error("words is required");
  let word = words[0].toLowerCase();
  for (let  i = 1; i < words.length; i++) {
    word += words[i].charAt(0).toUpperCase() + words[i].slice(1);

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
  return (menu.filter(menuItem => menuItem.ingredients.includes(ingredient)).length > 0);
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
