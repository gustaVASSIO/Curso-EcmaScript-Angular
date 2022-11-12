const obj ={
    2021:{
        janeiro:{
            pessoal:2000,
            casa:4000,
            investimento:2000
    },
    fevereiro:{
        pessoal:3000,
        casa:8000,
        investimento:1000
    }
}
}
console.log(obj['2021'].marco?.pessoal)//testando com '?' se existe a propriedade 'marco' antes de acessa-la
console.log(obj['2021'].fevereiro.pessoal)
