var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if(hora > 4 && hora < 12) {
    console.log('Bom Dia!')
} else if(hora >= 12 && hora < 18) {
    console.log('Bom Tarde!')
} else {
    console.log('Boa Noite!')
}