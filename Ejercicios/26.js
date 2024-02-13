const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
const goodProducts = []
const badProducts = []

for (const product of products) {
  if (product.sellCount > 20) {
    goodProducts.push(product)
  }
  if (product.sellCount <= 20) {
    badProducts.push(product)
  }
}

console.log('Best Products:', goodProducts)
console.log('Worst Products :', badProducts)
