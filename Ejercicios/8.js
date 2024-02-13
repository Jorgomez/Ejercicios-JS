const avengers = [
  'Hulksjdbcabcla',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(array) {
  let longestWord = ''

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i]
    }
  }

  return longestWord
}
console.log(findLongestWord(avengers))
