let imagensContainer = document.querySelector(".img--gallery")
let zeraTempo;
let botaoPrev = document.querySelector("#prev")
let botaoNext = document.querySelector("#next")
var contadorOito = 0
let arrayImagens = [1,2,3,4,5,6,7,8]
let imagensTotal = arrayImagens.length

let contadorAngulo = 0
botaoPrev.addEventListener("click", imgPrevFunc)
function imgPrevFunc(){
    contadorOito -= 1
    clearTimeout(zeraTempo)
    contadorAngulo += 45
    updateImgsContainer()
}
botaoNext.addEventListener("click", imgNextFunc)
function imgNextFunc(){
    contadorOito += 1
    clearTimeout(zeraTempo)
    contadorAngulo -= 45
    updateImgsContainer()
}
updateImgsContainer()
function updateImgsContainer(){
    imagensContainer.style.transform = `perspective(1000px) rotateY(${contadorAngulo}deg)`
    //(()=>{if(contadorOito>8){contadorOito = 1}else if(contadorOito < 1){contadorOito = 8}})
    colocaBlur()
    zeraTempo = setTimeout(()=>{
        imgNextFunc()  
    } , 3000)
}

function colocaBlur(){
    if(contadorOito > imagensTotal || contadorOito == 1){
        contadorOito = 1
        let elementoProximo = document.getElementsByName(`img${2}`)[0]
        let elementoAnterior = document.getElementsByName(`img${imagensTotal}`)[0]
        let elementoAtual = document.getElementsByName(`img${1}`)[0]
        colocaBlurNasImg(elementoAnterior, elementoAtual, elementoProximo)
        return
    }else if(contadorOito < 1 || contadorOito == imagensTotal){
        contadorOito = imagensTotal
        let elementoProximo = document.getElementsByName(`img${1}`)[0]
        let elementoAnterior = document.getElementsByName(`img${imagensTotal-1}`)[0]
        let elementoAtual = document.getElementsByName(`img${imagensTotal}`)[0]
        colocaBlurNasImg(elementoAnterior, elementoAtual, elementoProximo)
        return
    }
        let elementoProximo = document.getElementsByName(`img${contadorOito+1}`)[0]
        let elementoAnterior = document.getElementsByName(`img${contadorOito-1}`)[0]
        let elementoAtual = document.getElementsByName(`img${contadorOito}`)[0]
        colocaBlurNasImg(elementoAnterior, elementoAtual , elementoProximo)
        return
}

function colocaBlurNasImg(elementoAnterior, elementoAtual, elementoProximo){
    elementoAtual.style.filter = "blur(0px)"
    elementoAnterior.style.filter = "blur(3px)"
    elementoProximo.style.filter = "blur(3px)"
}

