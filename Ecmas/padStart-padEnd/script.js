const  n= '2232'
const numero = n.padStart(8,'8')//adiciona caracteres a esquerda até completar o 8 caracteres
console.log(`PadStart: ${numero}`)

const numero2 = n.padEnd(8,'3')
console.log(`PadEnd: ${numero2}`)
