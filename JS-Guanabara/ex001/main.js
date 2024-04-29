function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  const data = new Date();
  let hora = data.getHours();

  if (hora >= 0 && hora < 12) {
    msg.innerHTML = `Agora são ${hora} horas.<br> Bom dia!`;
    img.src = "images/fotomanha.jpg";
    document.body.style.background = "linear-gradient(60deg, #b45905, #c98322)";
  } else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `Agora são ${hora} horas.<br> Boa tarde!`;
    img.src = "images/fototarde.jpg";
    document.body.style.background = "linear-gradient(60deg, #ffffa4, #c03b18)";
  } else {
    msg.innerHTML = `Agora são ${hora} horas.<br> Boa noite!`;
    img.src = "images/fotonoite.jpg";
    document.body.style.background =
      "linear-gradient(180deg, #0d2b2d, #fdd5ae)";
  }
}
