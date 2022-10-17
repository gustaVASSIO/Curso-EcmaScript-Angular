function contaUmaHistória(nome='Loro',gosto='cantar',dono='Gustavo'){
    //return console.log(`Era uma vez um pássaro chamado ${nome}, ele adorava ${gosto}, seu dono era o ${dono}, e eles viveram felizes para sempre`)
    return `Era uma vez um pássaro chamado ${nome}, ele adorava ${gosto}, seu dono era o ${dono}, e eles viveram felizes para sempre`
}
document.getElementById('hist').innerHTML =`<b>${contaUmaHistória('Pipoca')}</b>` 