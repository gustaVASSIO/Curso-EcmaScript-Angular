// //flat 
// const  arr = [1,2,3,4,[5,6,7,[1,7,3]]]
// const arr2 = arr.flat(2)
// console.log(arr)
// console.log(arr2)
//flatmap
const nomes = [
    'gustavo,vagner,joao',
    'dina,marcia,lucia',
    'dhara,ana,malu'
]
const nomesMap =  nomes.map(nome=>{
   return nome.split(',')
})
const nomesFlatMap =  nomes.flatMap(nome=>{
   return nome.split(',')
})
console.log(nomes)
console.log(nomesMap)
console.log(nomesFlatMap)