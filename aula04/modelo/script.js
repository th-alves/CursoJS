function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
   if(fano.value.lenght == 0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
    var fsex = document.getElementByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    
    if (fsex[0].checked){
        gênero = 'Homem'
    }else if (fsex[1].checked){
        gênero = 'Mulher'
    }
    res.style.textAlign = 'center'
    res.innerHTML = `${gênero} com ${idade} anos.`
   }
}