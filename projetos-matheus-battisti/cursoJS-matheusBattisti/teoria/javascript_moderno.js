// Arrow Function
const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 2));

const cumprimento = (nome) => {
  const mensagem = `Olá ${nome}!`;
  return mensagem;
};
console.log(cumprimento("Thiago"));

// Template Literals
const nome = "Maria";
const idade = 22;
console.log(`Meu nome é ${nome} e eu tenho ${idade}`);

// Destructuring
const pessoa = { nome: "João", idade: 30 };
const { nome: nome2, idade: idade2 } = pessoa;
console.log(nome2, idade2);

const numeros = [1, 2, 3, 4];
const [primeiro, segundo, terceiro] = numeros;
console.log(primeiro, segundo, terceiro);

// Spread operator
const array1 = [1, 2];
const array2 = [...array1, 3, 4];
console.log(array2);

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0);
console.log(soma2(1, 2, 3, 4, 5));

// Default Parameters
function saudacao(nome = "Visitante") {
  console.log(`Bem vindo ${nome}!`);
}
saudacao();
saudacao("Thiago");

// Object Literals
const nomeNovo = "Thiago";
const idadeNova = 22;
const PessoaNova = { nome: nomeNovo, idade: idadeNova };
console.log(PessoaNova);

const saudacaoObject = {
  dizerOi() {
    console.log("oi");
  },
};

saudacaoObject.dizerOi();

// Classes e Heranças
class Pessoa {
  constructor(nome, idade, comidaFavorita) {
    this.nome = nome;
    this.idade = idade;
    this.comidaFavorita = comidaFavorita;
  }

  falar() {
    console.log(`Olá pessoal, tudo bem? meu nome é ${this.nome}.`);
  }
}

const thiago = new Pessoa("Thiago", 22, "Frango");
thiago.falar();
console.log(thiago);

class Dev extends Pessoa {
  constructor(nome, idade, linguagemFavorita, salario) {
    super(nome, idade);
    this.linguagemFavorita = linguagemFavorita;
    this.salario = salario;
  }
}
const thigas = new Dev("Thigas", 22, "JavaScript", 10);
console.log(thigas);
