function tabuada() {
    var numero = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if (numero.value.length == 0) {
        window.alert(`[ERRO] Informe um número.`)
    }
    else {
        var num = Number(numero.value)
        tabuada.innerHTML = ''
        intem.value = `tab${c}`
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
}