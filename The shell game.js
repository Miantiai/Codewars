function findTheBall(start, swaps) {
  let ballPos = start;
  for (let swap of swaps) {
    if (swap.includes(ballPos)) {
      ballPos === swap[0]? ballPos = swap[1] : ballPos = swap[0]  
    }
  }
  return ballPos
}