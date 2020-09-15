function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => Math.pow(num,2));
}

function camelCaseWords(words) {
  if (words === undefined) throw error("words is required");
  //your code here!
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
  //Write your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
