function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings['fillings'];
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return Object.details(person).
    Map(details[0] === 'city' && details[1] === "Manchester").
    reduce ((person, city) => person || city);
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const averageBusPass = 40;
  let num = Math.floor(people / averageBusPass);
  return (people % averageBusPass === 0) ? num : ++num;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.address.city === "Manchester" && person.address.postCode.charAt(0) === 'M');
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
