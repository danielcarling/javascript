let lista = document.querySelector('select#selnum')
let res = document.querySelector('div#res')
let num = document.querySelector('input#txtn')
let vetor = []

function getmaior(vet) {
    let maior
    for(let pos in vet) {
        if(vet[pos] > maior || maior == undefined) {
            maior = vet[pos]
        }
    }
    return maior
}

function getmenor(vet) {
    let menor
    for(let pos in vet) {
        if(vet[pos] < menor || menor == undefined) {
            menor = vet[pos]
        }
    }
    return menor
}

function somavetor(vet) {
    let soma = 0
    for(let pos in vet){
        soma += vet[pos]
    }
    return soma
}

function getmedia(vet) {
    return somavetor(vet)/vetor.length
}

function isNumero(n) {
    if(n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, v) {
    if(v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já adicionado.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(vetor.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        res.innerHTML = `<p><p>Ao todo, temos ${vetor.length} números cadastrados<p>`
        res.innerHTML += `<p>O maior valor informado foi ${getmaior(vetor)}<p>`
        res.innerHTML += `<p>O menor valor informado foi ${getmenor(vetor)}<p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${somavetor(vetor)}<p>`
        res.innerHTML += `<p>A média dos valores inseridos é ${getmedia(vetor)}<p>`
    }
}