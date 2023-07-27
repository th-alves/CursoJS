function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#F9F871'
    } else if (hora >=12 && hora <= 18){
        //Boa tarde!
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#FF9671'
    } else {
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#0089BA'
    }
}