//https://www.codewars.com/kata/58249d08b81f70a2fc0001a4

const closestMultiple10 = num => {
  num = num / 10 
  num = Math.round(num);
  num = num * 10
  return num
};

console.log(closestMultiple10(35));