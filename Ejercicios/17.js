const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

for (const key in alien) {
  let valor = alien[key]
  console.log(`${key} : ${valor}`)
}
