function gerarTabuada() {
    var txtnum = document.querySelector('input#txtnum')
    var tab = document.querySelector('select#seltab')

    if(txtnum.value.length == 0) {
        alert('É preciso inserir um número.')
    } else {
        tab.innerHTML = ''
        var num = Number(txtnum.value)
        for(var i = 1; i <= 10; i++) {
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}