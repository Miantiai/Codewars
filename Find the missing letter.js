// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array)
{
  for(let i = 0; i < array.length; i++) {
    let current = array[i];
    let next = array[i + 1];
    if (next.charCodeAt() - current.charCodeAt() === 2) {
      return String.fromCharCode(next.charCodeAt() - 1);
    }
  }
}


console.log(findMissingLetter(['a','b','c','d','f'])) // , 'e');
console.log(findMissingLetter(['O','Q','R','S']))// , 'P');