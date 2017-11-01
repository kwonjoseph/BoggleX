const generateDice = function() {
  var rowOfDice = [];
  var board = [];
  var dice = [
    ['A', 'A', 'A', 'F', 'R', 'S'],
    ['A', 'A', 'E', 'E', 'E', 'E'],
    ['A', 'A', 'F', 'I', 'R', 'S'],
    ['A', 'D', 'E', 'N', 'N', 'N'],
    ['A', 'E', 'E', 'E', 'E', 'M'],
    ['A', 'E', 'E', 'G', 'M', 'U'],
    ['A', 'E', 'G', 'M', 'N', 'N'],
    ['A', 'F', 'I', 'R', 'S', 'Y'],
    ['B', 'J', 'K', 'Qu', 'X', 'Z'],
    ['C', 'C', 'E', 'N', 'S', 'T'],
    ['C', 'E', 'I', 'I', 'L', 'T'],
    ['C', 'E', 'I', 'L', 'P', 'T'],
    ['C', 'E', 'I', 'P', 'S', 'T'],
    ['D', 'D', 'H', 'N', 'O', 'T'],
    ['D', 'H', 'H', 'L', 'O', 'R'],
    ['D', 'H', 'L', 'N', 'O', 'R'],
    ['D', 'H', 'L', 'N', 'O', 'R'],
    ['E', 'I', 'I', 'I', 'T', 'T'],
    ['E', 'M', 'O', 'T', 'T', 'T'],
    ['E', 'N', 'S', 'S', 'S', 'U'],
    ['F', 'I', 'P', 'R', 'S', 'Y'],
    ['G', 'O', 'R', 'R', 'V', 'W'],
    ['I', 'P', 'R', 'R', 'R', 'Y'],
    ['N', 'O', 'O', 'T', 'U', 'W'],
    ['O', 'O', 'O', 'T', 'T', 'U']
  ];
  dice = randomize(dice);
  dice.forEach(die => {
    var rand = Math.floor(Math.random() * die.length);
    rowOfDice.push(die[rand]);
    if (rowOfDice.length === 5) {
      board.push(rowOfDice);
      rowOfDice = [];
    }
  });
  return board;
}

const randomize = function(array) {
  var length = array.length;
  var idx = 0;
  var temp;

  while (length) {
    idx = Math.floor(Math.random() * length--);

    temp = array[length];
    array[length] = array[idx];
    array[idx] = temp;
  }
  return array;
}

export default generateDice;
