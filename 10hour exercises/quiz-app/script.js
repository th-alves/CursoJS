// Banco de dados
const quiz_data = [
  {
    question: 'Qual a capital do Brasil?',
    a: 'São Paulo',
    b: 'Rio de Janeiro',
    c: 'Brasília',
    d: 'Belo Horizonte',
    correct: 'c'
  },
  {
    question: 'Quem escreveu "Dom Casmurro"?',
    a: 'Machado de Assis',
    b: 'Jorge Amado',
    c: 'Clarice Lispector',
    d: 'Graciliano Ramos',
    correct: 'a'
  },
  {
    question: 'Qual é o maior planeta do Sistema Solar?',
    a: 'Terra',
    b: 'Júpiter',
    c: 'Marte',
    d: 'Vênus',
    correct: 'b'
  },
  {
    question: 'Qual é o símbolo químico do oxigênio?',
    a: 'O',
    b: 'N',
    c: 'H',
    d: 'C',
    correct: 'a'
  },
  {
    question: 'Quem pintou a Mona Lisa?',
    a: 'Vincent van Gogh',
    b: 'Pablo Picasso',
    c: 'Leonardo da Vinci',
    d: 'Salvador Dalí',
    correct: 'c'
  },
];

// Seleção dos elementos
const answer_els = document.querySelectorAll('.answer');
const question_el = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit_button = document.getElementById('submit');

// Pré definições
let currentQuiz = 0;
let score = 0;

// Funções
function loadQuiz() {
  deselectAnswers();
  const current_quiz_data = quiz_data[currentQuiz];

  question_el.innerText = current_quiz_data.question;
  a_text.innerText = current_quiz_data.a;
  b_text.innerText = current_quiz_data.b;
  c_text.innerText = current_quiz_data.c;
  d_text.innerText = current_quiz_data.d;
}

function getSelected() {
  let answer = undefined;

  answer_els.forEach((answer_el) => {
    if (answer_el.checked) {
      answer = answer_el.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answer_els.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

loadQuiz();

// Eventos
submit_button.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quiz_data[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quiz_data.length) {
      loadQuiz();
    } else {
      alert(`Você acertou ${score} de ${quiz_data.length}!😁`);
      quiz.innerHTML = '<button onclick="location.reload()">Reiniciar</button>';
    }
  }
});
