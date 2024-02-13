// const numbers = [1, 2, 3, 5, 45, 37, 58, 10]

// function sumAll(param) {
//   let sum = param[param.length - 1]
//   for (let i = 0; i < param.length - 1; i++) {
//     sum = param[i] + sum
//   }
//   return sum
// }

// console.log(sumAll(numbers))

const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(param) {
  let sum = param[0]
  for (let i = 1; i < param.length; i++) {
    sum = param[i] + sum
  }
  return sum
}

console.log(sumAll(numbers))
