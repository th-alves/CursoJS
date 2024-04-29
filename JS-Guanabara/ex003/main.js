let btn = document.getElementById("btn");
btn.addEventListener("click", contar);

function contar() {
  let inicio = document.getElementById("inicio");
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");
  let resolucao = document.getElementById("res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("Antes de contar, todos os campos devem ser preenchidos!");
  } else {
    let conversaoInicio = Number(inicio.value);
    let conversaoFim = Number(fim.value);
    let conversaoPasso = Number(passo.value);
  }
}
