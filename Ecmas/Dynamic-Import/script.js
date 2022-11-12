// import { saudacao, getElementByCep } from "./lib.mjs"; importação estática do módulo lib
const btsaud = document.querySelector("#saudacao");
const btcep = document.querySelector("#btncep");

btsaud.addEventListener("click", async () => {
  const { saudacao } = await import("./lib.mjs"); //lidando com a importação de forma dinamica, requisitando a função somente quando necessário
   console.log(saudacao())   //.then(({saudacao}) => console.log(saudacao()))
});

btcep.addEventListener("click", () => {
  let cep = document.getElementById("cep").value;
  cep = cep.replace('-','')
  if (cep.length == 8) {
    
    import("./lib.mjs").then(({ getElementByCep }) => getElementByCep(cep));
  } else {
    console.log("cep invalido");
  }
});
