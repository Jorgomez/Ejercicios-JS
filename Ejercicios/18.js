const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 21, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 40, name: 'Filipinas' },
  { id: 10, name: 'Madagascar' }
]

for (const object of placesToTravel) {
  if (object.id === 11 || object.id === 40) {
    placesToTravel.splice(placesToTravel.indexOf(object), 1), (object = 0)
  }
}

console.log(placesToTravel)
