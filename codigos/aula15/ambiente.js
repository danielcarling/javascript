var num = [5, 2, 4, 9, 7, 1, 3, 6, 9, 8]
let enc = 9
var busca = []
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


if(busca == -1){
    console.log(`O valor ${enc} não está no vetor!`)
} else {
    console.log(`O valor ${enc} está na posição ${busca[1]}`)
}
