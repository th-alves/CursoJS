var agora = new Date()
var hora = agora.getHours()

if (hora < 12) {
    console.log(`São exatamente ${hora} horas. Bom dia!`)
} else if (hora < 18) {
    console.log(`São exatamente ${hora} horas. Boa tarde!`)
} else {
    console.log(`São exatamente ${hora} horas. Boa noite!`)
}