export const saudacao = ()=>{
    const data = new Date().toLocaleDateString()
    return `Ola seja bem vindo hoje é ${data}`
}

export async function getElementByCep(cep){
   const res = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
   const json = await res.json()
   return console.log(json) 
    
}