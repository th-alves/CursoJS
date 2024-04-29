let numero = document.querySelector("input#formNumero");
let lista = document.querySelector("select#formList");
let resposta = document.querySelector("div#res");
let valores = [];

function isNumero(numero) {
  if (Number(numero) >= 1 && Number(numero) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(numero, lista) {
  if (lista.indexOf(Number(numero)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(numero.value) && !inLista(numero.value, valores)) {
    valores.push(Number(numero.value));
    let item = document.createElement("option");
    item.text = `Valor ${numero.value} adicionado.`;
    lista.appendChild(item);
    resposta.innerHTML = "";
  } else {
    alert("Valor inválido ou já encontrado na lista");
  }
  numero.value = "";
  numero.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione algum valor antes de finalizar!");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let position in valores) {
      soma += valores[position];
      if (valores[position] > maior) {
        maior = valores[position];
      } else {
        if (valores[position] < menor) {
          menor = valores[position];
        }
      }
    }

    media = soma / total;
    resposta.innerHTML = "";
    resposta.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    resposta.innerHTML += `<p>O maior valor informado foi o ${maior}.</p>`;
    resposta.innerHTML += `<p>O menor valor informado foi o ${menor}.</p>`;
    resposta.innerHTML += `<p>Somando esses valores, temos ${soma}.</p>`;
    resposta.innerHTML += `<p>A soma dos valores digitados é ${media}</p>`;
  }
}
