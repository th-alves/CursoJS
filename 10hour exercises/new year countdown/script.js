// Selecionando os elementos
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const seconds = document.getElementById('seconds');

/* Aqui, criamos uma variável chamada "dataFinal" que armazena a data e hora do 
Ano Novo de 2025 (1º de janeiro de 2025 às 00:00:00) em milissegundos desde 
1º de janeiro de 1970 (é assim que o JavaScript lida com datas). Usamos 
new Date('2025-01-01 00:00:00') para criar um objeto de data com a data especificada 
.getTime() retorna o valor em milissegundos. */
const dataFinal = new Date('2025-01-01 00:00:00').getTime();

/* Criamos um intervalo que executa a função anônima a cada 1000 milissegundos 
(ou seja, a cada segundo). Essa função será responsável por atualizar o contador. */
const interval = setInterval(() => {
  // Criamos uma variável chamada agora que armazena o tempo atual em milissegundos.
  const agora = new Date().getTime();
  /* Calculamos a diferença entre a data final (Ano Novo de 2025) e o tempo atual.
  Calculamos os componentes de tempo restante: dias, horas, minutos e segundos 
  representam as partes da diferença de tempo. Usamos matemática simples para obter esses valores. */
  const diferenca = dataFinal - agora;

  let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  if (dias < 10) dias = '0' + dias;
  if (horas < 10) horas = '0' + horas;
  if (minutos < 10) minutos = '0' + minutos;
  if (segundos < 10) segundos = '0' + segundos;

  // Mostando o conteúdo
  days.innerText = dias;
  hours.innerText = horas;
  mins.innerText = minutos;
  seconds.innerText = segundos;

  /* Se a diferença for menor que zero (ou seja, já passou do Ano Novo), paramos
   o contador e exibimos “Feliz Ano Novo!”. */
  if (diferenca < 0) {
    clearInterval(interval);
    alert('FELIZ ANO NOVOOOO!🥳🥳');
  }
}, 1000);
