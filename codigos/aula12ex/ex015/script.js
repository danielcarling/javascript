function verifica() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtidade')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] O ano inserido é inválido!')
    } else {
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <= 13) {
                //Criança
                img.setAttribute('src', 'criancamasculino.png')
            } else if(idade <= 25) {
                //Jovem
                img.setAttribute('src', 'jovemmasculino.png')
            } else if(idade <= 50){
                //Adulto
                img.setAttribute('src', 'adultomasculino.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosomasculino.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 13) {
                //Criança
                img.setAttribute('src', 'criancafeminino.png')
            } else if(idade <= 25) {
                //Jovem
                img.setAttribute('src', 'jovemfeminino.png')
            } else if(idade <= 50){
                //Adulto
                img.setAttribute('src', 'adultofeminino.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosofeminino.png')
            }
        }
        res.innerHTML = `Você tem ${idade} anos de idade<br>`
        res.appendChild(img)
    }
}