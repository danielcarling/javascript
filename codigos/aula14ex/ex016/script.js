function contar() {
    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.querySelector('input#txtfim')
    var txtpasso = document.querySelector('input#txtpasso')

    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Math.abs(Number(txtpasso.value))
    var res = document.querySelector('div#res')
    
    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        res.style.color = 'red'
    } else {
        if(passo == 0) {
            alert('Impossível contar com passo 0, considerando passo 1')
            passo = 1
        }
        res.innerHTML = 'Contando: <br>'
        if(inicio <= fim) {
            for(var i = inicio;  i <= fim; i += passo) {
                res.innerHTML += `\u{1F449} ${i} `
            }
            res.innerHTML += '\u{1F449} \u{1F3C1}'
        } else {
            for(var i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `\u{1F449} ${i} `
            }
            res.innerHTML += '\u{1F449} \u{1F3C1}'
        }
    }
    
    
}
