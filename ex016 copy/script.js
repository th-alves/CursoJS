function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght ==  0){
        res.innerHTML = 'Declare um valor para começar'
    }else{
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p =  Number(passo.value)

        if(passo =< 0){
            alert('Passo Inválido! Declare um número para prosseguir.')
        }

        if(i < f){
            for(var c = i;c <= f;c += p)
            res.innerHTML = `${c}`
        }else{
            for(var c = i;c >= f; c -= p)
            res.innerHTML = `${c}`
        }
    }
}