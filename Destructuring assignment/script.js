//Destructuring com arrays

const frutas =['abacaxi', 'uva', 'pera', 'mamão']
const [a,b,c,d] = frutas

const list = [['abacaxi', 'uva', 'pera', 'mamão'],['josé','maria']]
const [,[,nm]] = list 

// console.log(nm)


//Destructuring com objetos 

const produto = {
    nome:'Notebook',
    preco:'R$ 5000',
    descricao:'Muito bom',
    desconto:'5%',
    detalhes:{
        ano:'2020',
        fabricante:'Inatel' 
    }
}
const {nome, preco, desconto= 'Não há descontos para este produto', detalhes:{fabricante}} = produto
//console.log(nome, Number(preco.replace('R$ ','')), desconto, fabricante)

//Destucturing com funções

