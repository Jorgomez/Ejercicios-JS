const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

const usersMayor = []
const usersMenor = []
for (const user of users) {
  if (user.years < 18) {
    usersMenor.push(user.name)
  }

  if (user.years >= 18) {
    usersMayor.push(user.name)
  }
}

console.log(
  `Los usuarios menores son ${usersMenor} y los usuarios mayores son ${usersMayor}`
)
