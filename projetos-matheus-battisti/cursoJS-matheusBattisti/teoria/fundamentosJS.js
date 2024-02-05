//⬇️Avançando em JavaScript: Manipulação de Arrays.
const frutas = ["Maçã", "Banana"];
frutas.unshift("Pêra"); // Adiciona o item no index 0.
console.log(frutas);

frutas.shift(); // Remove o index 0.
console.log(frutas);

//📍Map, filter, reduce etc...
const numeros = [1, 2, 3, 4, 5];

//✅ O find apenas retorna o primeiro elemento que atenda o critério.
let numeroPar = numeros.find((num) => num % 2 === 0);
console.log(numeroPar); //2

//✅ O filter retorna todos os elementos que atenderem o critério.
let numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares); //2, 4

//📍Manipulação de strings ⬇️
const frase = "Olá, Mundo!   ";
//✅ Trim remove espaços vazios do começo e do fim da string.
console.log(frase.trim()); // "Olá, Mundo!"

//✅ .startsWith e .endsWith verificam se a string possível uma palavra específica.
const frase2 = "JavaScript é incrível!";
console.log(frase2.startsWith("Java"));
console.log(frase2.endsWith("!"));

//📍Exceções e tratamentos de erros ⬇️
try {
  //Vai tentar executar o bloco abaixo
  const idade = 15;
  if (idade < 18) {
    throw new Error("Menores não podem votar!");
  }
} catch (error) {
  //Caso dê um erro, será pego pelo catch, que executará o código abaixo sem encerrar o programa
  console.log(error.message);
}

//📍Callbacks são funções que serão executadas em outras funções ⬇️
function cumprimentar(nome, callback) {
  console.log(`Bom dia, ${nome}!`);
  callback();
}

cumprimentar("Thiago", function () {
  console.log("Como você está?");
});

//📍setTimeOut depois de um tempo executa algo, uma vez ⬇️
function mensagem() {
  console.log("pinto penis pal em agua, tanto fura até que rasga");
} // setTimeout(mensagem, 3000);

//📍Promises⬇️
const promessa = new Promise((resolve, reject) => {
  const idade = 22;
  if (idade < 18) {
    resolve("Você é menor de idade!");
  } else {
    reject("Você é maior de idade!");
  }
});

promessa
  .then((mensagem) => {
    //o .then é um método que vai executar a promessa e fazer o recebimento dos valores.
    console.log(mensagem);
  })
  .catch((erro) => {
    //.catch vai pegar algum possível erro.
    console.log(erro);
  });

//📍Bibliotecas feitas que são "promise based" ⬇️
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2500, "testando");
});

Promise.all([promise1, promise2]).then((valores) => console.log(valores));

//📍Async Await⬇️
async function obterValor() {
  // criamos uma função assíncrona que não depende de ela ser executada para as próximas linhas serem executadas, não travando o programa.
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Valor obtido", 2000));
  });
  const valor = await promessa; // vamos esperar o resultado estar concluído para atribuí-lo a variável valor.

  console.log(valor); //mostraremos o resultado no console.
}
obterValor(); //invocamos a função.

async function obterValorComErro() {
  try {
    // criamos uma função assíncrona que não depende de ela ser executada para as próximas linhas serem executadas, não travando o programa.
    const promessa = new Promise((resolve, reject) => {
      setTimeout(() => reject("Valor com erro obtido", 2000));
    });
    const valor = await promessa; // vamos esperar o resultado estar concluído para atribuí-lo a variável valor.

    console.log(valor); //mostraremos o resultado no console.
  } catch (error) {
    console.log(error);
  }
}
obterValorComErro();

/*📍JSON (JavaScript Object Notation)⬇️
{nome: "teste"} virou {"nome": "teste"}
Isso padroniza a comunicação entre front-end e back-end em uma linguagem só
*/
const objeto = { nome: "João", idade: 30 };
const jsonString = JSON.stringify(objeto);
console.log(jsonString);

const json = '{"nome": "João", "idade": 30}';
const objeto2 = JSON.parse(json);
console.log(objeto2);
