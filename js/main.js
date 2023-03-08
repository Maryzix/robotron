
//tipo de variável que não pode ser alterada
//const robotron = document.querySelector('#robroton')

//robotron.addEventListener('click', dizOi)
//se a função ta declarada, vc consegue chamar, a anonima não pode ser executada em outro momento, só quando o evento do clique for declarado
//função anônima, funcionar só uma vez 


//outra forma de declarar anonima () =>
//robotron.addEventListener('click', () =>{
   // console.log("Oi, cliquei no robo")
//})


//robotron.addEventListener('click', function(){
  //  console.log("Oi, cliquei no robo")
//})

//um evento anonimo, pq é importante? pq ao clicar em qualquer um dos itens para somar os itens do meu robo 
//robotron.addEventListener('click', (evento) => {
 //   console.log(evento)
//})
//Passei um parametro, e declarei o parametro
//function dizOi(nome){
 //   console.log(nome)
 //   console.log("PARA DE CLICAR")
//}

//chamar a função 
//repetir blocos de código, declaração de uma função 

//declarei o parametro
//dizOi("Mary")


//o mais importante da função, é poder manipular


//FUNCTION PARA AUMENTAR OS PONTOS

const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}




controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInd(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}