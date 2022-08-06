//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/solutions/javascript
function high(x){
  let words = x.split(' ');
  let scoresArr = words.map(word => {
    let letters = word.split('')
    let score = 0;
    letters.forEach(letter => score += letter.charCodeAt() - 96)
    return {word, score};
  })
  let sortedArr = scoresArr.sort((a,b) => b.score - a.score)
  sortedArr
  return sortedArr[0].word;
}





// high('man')// 'taxi');
    console.log(high('man i need a taxi up to ubud'))// 'taxi');
    console.log(high('what time are we climbing up the volcano'))// 'volcano'); 
    console.log(high('take me to semynak'))// 'semynak'); 