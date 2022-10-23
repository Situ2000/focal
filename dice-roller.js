const diceRoller = function(numberOfDice) {
  let results = [];
  
  for (let i = 0; i < numberOfDice; i++) {
    let result = Math.floor(Math.random() * 5 + 1);
    results.push(result);
  }
  
  diffDice = results.join();
  return `Rolled 3 dice: ${diffDice}`;
};