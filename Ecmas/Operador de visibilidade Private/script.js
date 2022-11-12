class Pessoa {
    #humor='Estressado'
    constructor(nome){
        this.nome = nome
    }
    dizOla() {
        return `Meu nome é ${this.nome}`
    }
    getHumor(){
        return this.#humor
    }
    setHumor(humor){
        this.#humor = humor
    }

}
const pessoa = new  Pessoa('Ronaldo')
//console.log(pessoa.dizOla())
// console.log(Pessoa)
console.log(pessoa.nome)
console.log(pessoa.getHumor())
console.log(pessoa.setHumor('Feliz'))
console.log(pessoa.getHumor())