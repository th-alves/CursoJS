// DOM - Document Object Model
// Selecionar elementos

const elementoPorID = document.getElementById("meuId");
console.log(elementoPorID);

const elementoPorID2 = document.querySelector("#meuId");
console.log(elementoPorID2);

const elementPorClasse = document.getElementsByClassName("minhaClasse");
console.log(elementPorClasse);

// Manipular conteúdo de texto
const element = document.querySelector("#meuId");
console.log(element.textContent);

element.textContent = "Mudei o texto e o background";

// Trabalhando com atributos
const link = document.querySelector("a");
console.log(link);
link.setAttribute("href", "https://horadecodar.com.br/cursos");
console.log(link.getAttribute("href"));
console.log(link.hasAttribute("target"));
link.removeAttribute("target");

// Manipulação de classes do CSS
const elemento = document.querySelector("meuId");
element.classList.add("novaClasse");
element.classList.remove("minhaClasse");
element.classList.toggle("outraClasse"); // adicionou a classe
element.classList.toggle("outraClasse"); // removeu ela

// Manipular o CSS
const elemento3 = document.querySelector("#meuId");
elemento3.style.color = "#fff";
elemento3.style.backgroundColor = "black";

// Navegação entre nós
const element4 = document.querySelector("#meuInput");
const pai = element4.parentNode;
console.log(pai);

// Obter o primeiro filho

const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);
const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);

// Manipulação de estrutura do DOM
const novoElemento = document.createElement("div");
novoElemento.textContent = "Minha div de JavaScript";
console.log(novoElemento);
document.body.appendChild(novoElemento);
document.body.insertBefore(novoElemento, pai);
document.body.removeChild(elementoPorID);

// Eventos em JS
// Click
const botao = document.querySelector("button");
botao.addEventListener("click", function () {
  console.log("boão clicado!");
});

// Mouse
const elemento5 = document.querySelector("#meuFormulario");
elemento5.addEventListener("mouseover", function () {
  console.log("O mouse passou aqui!");
});

// Teclado
const campoInput = document.querySelector("#meuInput");
campoInput.addEventListener("keydown", function () {
  console.log("tecla pressionada");
});

// formulario
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Formulário enviado com sucesso!");
});

// propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", function () {
  console.log("Clicou no Pai");
});

document
  .querySelector("#elementoFilho")
  .addEventListener("click", function (e) {
    // e.stopPropagation();
    console.log("clicou no Filho");
  });

document.querySelector("#meuLink").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clickou no link");
});

// delegação de eventos
document.querySelector("#elementoPai").addEventListener("click", function (e) {
  if (e.target.matches(".classeDosFilhos")) {
    console.log("Elemento clicado é um filho");
  }
});
