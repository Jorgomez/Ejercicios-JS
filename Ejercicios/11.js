const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
// 4             //  9           //7         //3

function averageWord(param) {
  let sum = 0

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'string') {
      sum = param[i].length + sum
    } else if (typeof param[i] === 'number') {
      sum = param[i] + sum
    }
  }
  return sum
}

console.log(averageWord(mixedElements))

// function averageWord(param) {
//   let sum = 0
//   for (let i = 0; i < param.length; i++) {
//     if (typeof param[i] === 'string') {
//       sum = param[i].length + sum
//     } else {
//       sum = param[i] + sum
//     }
//   }
//   return sum
// }

// console.log(averageWord(mixedElements))
