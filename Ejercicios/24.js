const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let allsales = 0
for (const product of products) {
  allsales = product.sellCount + allsales
}

console.log('el total de ventas fue', allsales)
