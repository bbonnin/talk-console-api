// Syntax
console.count([label])
console.countReset([label])

// Usages
function hello(name) {
    console.count('#hello')
    return 'Hello ' + name + '!'
}

> hello('alice')
  #hello: 1
  "Hello alice!"

> hello('bob')
  #hello: 2
  "Hello bob!"

console.countReset('#hello')