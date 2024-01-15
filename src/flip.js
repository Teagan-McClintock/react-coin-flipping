/** return "heads" or "tails" randomly */

function flipCoin(){
  return Math.random() < 0.5 ? "heads" : "tails";
}

export default flipCoin;