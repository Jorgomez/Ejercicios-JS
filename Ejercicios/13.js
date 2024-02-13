const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function finderName(array, element) {
  if (array.includes(element)) {
    return `${true} and his position is ${array.indexOf(element)}`
  } else {
    return false
  }
}

const name = 'Jorge'

const name1 = 'Peggy'

console.log(finderName(nameFinder, name1))

// function finderName(param, param2) {
//   let checkName = false
//   for (let i = 0; i < param.length; i++) {
//     if (param[i] === param2) {
//       ;(checkName = true), i
//     }
//   }
//   return checkName, i
// }
// let name = 'Steve'

// console.log(finderName(nameFinder, name))

// function finderName(array, element) {
//   if (array.incluedes(element)) {
//     return true, array.indexof(element)
//   } else {
//     return false
//   }
// }

// let name = 'Steve'

// console.log(finderName(nameFinder, name))

// function finderName(array, element) {
//   if (array.includes(element)) {
//     return `${true}, ${array.indexOf(element)}`
//   } else {
//     return false
//   }
// }

// let name = 'Jorge'
// console.log(finderName(nameFinder, name))
