function exibirNome() {
    let nome = document.querySelector('#nome').value
    alert(nome)
}

function somar(){
    let ValorA = Number(document.querySelector('#ValorA').value)
    let ValorB = Number(document.querySelector('#ValorB').value)
    alert(ValorA + ValorB)
}

function subi(){
    let ValorA = Number(document.querySelector('#ValorA').value)
    let ValorB = Number(document.querySelector('#ValorB').value)
    alert(ValorA - ValorB)
}

function mult(){
    let ValorA = Number(document.querySelector('#ValorA').value)
    let ValorB = Number(document.querySelector('#ValorB').value)
    alert(ValorA * ValorB)
}

function div(){
    let ValorA = Number(document.querySelector('#ValorA').value)
    let ValorB = Number(document.querySelector('#ValorB').value)
    alert(ValorA / ValorB)
}