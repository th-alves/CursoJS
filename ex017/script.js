function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.lenght == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
            for(c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            }
    }
}