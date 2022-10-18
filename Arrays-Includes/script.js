const array = ['banana','maçã','uva']

// const ret = array.find(item => item==='maçã') Pesquisa de item com Find() ele retorna o elemento se existe e undifined se não existe//
const ret = array.includes('uva')// O metodo includes retorna true se o elemento existe e se não existe, false

console.log(ret)