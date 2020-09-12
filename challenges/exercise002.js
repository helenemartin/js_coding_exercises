function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings['fillings'];
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const averagePassengerNum = 40;
  let num = Math.floor(people / max averagePassengerNum);
  return (people % maxPassengerNum === 0) ? num : ++num;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
