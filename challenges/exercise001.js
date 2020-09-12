function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring (0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0] + "." + lastName[0];
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return parseFloat((originalPrice * (1+(vatRate/100))).toFixed(2),10);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return parseFloat((originalPrice * (1-(reduction/100))).toFixed(2), 10);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if(str.length %2 === 0){
    return str.slice((str.length/2)-1, str.length/2+1);
  }else{
    return str [parseInt((str.length/2),10)];
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let array = word.split('');
  array.reverse();
  return array.join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map( word =>{
    let letterScramble = word.split('');
    return letterScramble.reverse().join('');
  }) 
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let counter = 0;
  users.forEach (user => {
     if (user.type === 'Linux') {
       counter ++;
      }
   })
  return counter;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0;
    if(scores.length === 0){
      return sum;   
    }
  scores.forEach (score => {
    sum += score;
  })
  return parseFloat((sum / scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
    if ( n % 3 === 0 && n % 5 === 0){
      return "fizzbuzz";
    }else if (n % 3 === 0){
      return "fizz";
    }else if ( n % 5 === 0){
      return 'buzz';
    }else {
      return(n);
    }
}


module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
