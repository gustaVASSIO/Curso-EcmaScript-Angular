const processoAssincrono = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Sucesso no processo assincrono'), 3000)
    
})
function recuperarDados(){
    processoAssincrono.then(p=>console.log(p))
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(json=>console.log(json))
    setTimeout(()=>resolve('Sucesso no processo assincrono'), 3000)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(json=>console.log(json))
}
recuperarDados()
console.log('Fim')