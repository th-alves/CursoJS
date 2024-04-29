let btn = document.getElementById("btn");
btn.addEventListener("click", tabuada);

function tabuada() {
  let numero = document.getElementById("numero");
  let tabuada = document.getElementById("tabuada");

  if (numero.value.length == 0) {
    alert("Por favor digite um número!");
  } else {
    let conversaoNumero = Number(numero.value);
    let contador = 1;
    tabuada.innerHTML = "";

    while (contador <= 10) {
      let item = document.createElement("option");
      item.text = `${conversaoNumero} x ${contador} = ${
        conversaoNumero * contador
      }`;
      item.value = `tabuada${contador}`;
      tabuada.appendChild(item);
      contador++;
    }
  }
}
