function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  const formAno = document.getElementById("age");
  let res = document.querySelector("div#res");

  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    const formSex = document.getElementsByName("sex");
    let idade = ano - Number(formAno.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    //Verificando o sexo do usuário
    if (formSex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 12) {
        img.setAttribute("src", "images/manchildren.png");
      } else if (idade < 21) {
        img.setAttribute("src", "images/menphoto.png");
      } else if (idade < 50) {
        img.setAttribute("src", "images/menphoto.png");
      } else {
        img.setAttribute("src", "images/menphoto.png");
      }
    } else {
      genero = "Mulher";
      if (idade >= 0 && idade < 12) {
        img.setAttribute("src", "images/girlchildren.png");
      } else if (idade < 21) {
        img.setAttribute("src", "images/womanphoto.png");
      } else if (idade < 50) {
        img.setAttribute("src", "images/womanphoto.png");
      } else {
        img.setAttribute("src", "images/womanphoto.png");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
