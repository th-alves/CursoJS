/* Exercício 1: Manipulação de Array. Crie uma lista de compras que é inicialmente
vazia, adicione 5 itens à lista usando push(). Agora remova o primeiro item da lista
usando shift(). Imprima a lista final no console.
*/
const compras = [];
compras.push("Pão", "Leite", "Arroz", "Azeite", "Sucrilhos");
console.log(compras);

compras.shift();
console.log(compras);

/* Exercício 2: Find(). Você tem um array de números: [3, 7, 14, 21, 29, 36, 42]
Use a função find() para encontrar o primeiro número que seja divisível por 7
e maior que 10.
*/
const numeros = [3, 7, 14, 21, 29, 36, 42];
let resultado = numeros.find((numero) => {
  return numero > 10 && numero % 7 == 0;
});
console.log(resultado);

/* Exercício 3: Filter(). Dado o array de número: [5, 10, 15, 20, 25, 30, 35, 40].
Use a função filter() para criar um novo array que contenha apenas os número que são
maiores que 20.
*/
const listaDeNumeros = [5, 10, 15, 20, 25, 30, 35, 40];
const novaLista = listaDeNumeros.filter(
  (numerosMaiores) => numerosMaiores > 20
);
console.log(novaLista);

/* Exercício 4: Manipulação de String - split(), trim(). Dada a string: " Bom dia, mundo! "
Remova os espaços em branco no início e no final da string, em seguida
divida a string em palavras.
*/
const frase = " Bom dia, Mundo! ";
const palavras = frase.trim().split(" ");

console.log(palavras);

/* Exercício 5: startsWith(), endsWith()
Dada a string: 'O rato roeu a roupa do rei de Roma'.
Verifique se a string começa com a palavra "O" e termina com a palavra "roma"
*/

const string = "O rato roeu a roupa do rei de Roma";

let comeco = string.startsWith("O");
let fim = string.endsWith("Roma");
console.log(comeco);
console.log(fim);
