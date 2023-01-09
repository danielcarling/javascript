function carregar() {
    var horaSite = document.querySelector('div#div1')
    var imagem = document.querySelector('img#imagem')
    var fundo = document.body.style
    var data = new Date()
    var hora = data.getHours()

    horaSite.innerHTML = `Agora são ${hora}:${data.getMinutes()}.`
    if(hora > 4 && hora < 12) {
        horaSite.innerHTML += ' Bom dia!'
        fundo.background = '#e1e974'
        imagem.src = 'manha.png'
    } else if(hora >= 12 && hora < 18) {
        horaSite.innerHTML += ' Boa tarde!'
        fundo.background = '#ee8522b7'
        imagem.src = 'tarde.png'
    } else {
        horaSite.innerHTML += ' Boa noite!'
        fundo.background = '#1a1919cb'
        imagem.src = 'noite.png'
    }
}