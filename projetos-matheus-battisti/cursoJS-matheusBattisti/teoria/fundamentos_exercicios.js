// Exercício 1: "Olá, Mundo!". Crie um script que imprima essa mensagem no console.
console.log("Olá, Mundo!");

// Exercício 2: Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console.
let numero = "1234";
numeroConvertido = Number(numero);
console.log(
  `O tipo da variável é ${typeof numero}, mas convertida fica ${typeof numeroConvertido}`
);

// Exercício 3: Manipulação de strings. Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.
let frase = "JavaScript é incrível";
console.log(
  `Em '${frase}' o número de caracteres é ${
    frase.length
  }, e o número de palavras é ${frase.split(" ").length}`
);

// Exercício 4: Loops e Arrays. Crie um array com cinco nomes, use um loop for para imprimir cada nome no console.
const nomes = ["Thiago", "Muliro", "Yago", "Juao", "Laura"];
for (let i = 0; i < nomes.length; i++) {
  console.log(`Nome impresso: ${nomes[i]}`);
}

/* Exercício 5: Funções, Strings e Math.
Crie uma função que aceita uma string representando um horário no formato 24h.
A função deve retornar uma string que converta o horário para o formato de 12h.
Use a propriedade Math para te auxiliar nesta conversão. 
Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.*/
function converterHorario(horario) {
  let [horas, minutos] = horario.split(":");
  let periodo = horas >= 12 ? "PM" : "AM";
  horas = horas % 12 || 12;
  return `${horas}:${minutos} ${periodo}`;
}

const horario24 = "13:45";
const horario12 = converterHorario(horario24);
console.log(horario12);
