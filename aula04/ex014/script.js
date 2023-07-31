function carregar(){
var data = new Date()
var hora = data.getHours()

var msg = document.getElementById('msg')
msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //Bom dia!
    }else if (hora >= 12 && hora <= 18){
        //Boa tarde!
    }else {
        //Boa Noite!
    }
}
