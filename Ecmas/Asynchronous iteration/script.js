const processos = [1,2,3,4,5,6,7]
const assyncFunction =async ()=>{
  for(processo of processos){
         await new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log('Processamento assincrono')
            resolve()
        },3000)
           })
        console.log(processo)
  }

}
assyncFunction()
