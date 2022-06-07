// REPETIÇÕES

// Maneira correta, mas pouco usada (primeiro executo, depois testo)
var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6) 

// Maneira mais usada (primeiro testo, despois executo)
var c = 1
while (c < 6) {
    console.log(`Passo ${c}`)
    c++
}

/* Maneira incorreta de repetir um código
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/