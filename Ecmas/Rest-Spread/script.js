//  spread => contexto para expandir 

const titulo = 'Este é o titulo do meu site'
// console.log(...titulo)
// console.log([...titulo])
// console.log(typeof({...titulo}))
const lista1 = ['item 1', 'item 2']
const lista2 = ['item 3', 'item4']
const lista3SemSpread= [lista1,lista2,'item 5', 'item 6'] //  array sem o spread
const lista3ComSpread = [...lista1,...lista2,'item 5', 'item 6'] //array com o spread
// console.log(lista3SemSpread)
// console.log(lista3ComSpread)

// rest => contexto para condensar
//condensando todos os parametros em um array chamado param

const soma = (...param)=>{
   let total = 0 
    console.log(param)
    param.forEach(item=>total+=item)
    return total
}
const valor =  soma(9,7,8,6)
console.log(valor)
