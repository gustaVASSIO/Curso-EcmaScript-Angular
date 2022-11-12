//Aprendendo object values e object etries

const objeto = {
    nome:'Gustavo',
    sobrenome:'Santimaria',
    idade:17,
    hobies:[
        {id:1, hobby:'Jogar basquete'},
        {id:2, hobby:'Dar aulas'}
    ],
    pais:'Brasil'
}
// const arr = Object.values(objeto)[3]
//  const [hobbie1, hobbie2] = arr
// console.log(Object.values(objeto))
// console.log(Object.entries(objeto))

//Object ownpropertydescriptors


Object.defineProperty(objeto,'nome',{
    value:'Dina',
    writable:false
})
console.log(Object.getOwnPropertyDescriptors(objeto))
objeto.nome = 'Vagner'
console.log(objeto.nome)