console.log('🎉 JavaScript está funcionando!');

const botao = document.getElementById('botao-magico');
const resultado = document.getElementById('resultado');
const botaoReset = document.getElementById('botao-reset');

let contador = 0;

function cliqueNoBotao() {
  contador++;
  if (contador >= 10) {
    resultado.textContent = `Você clicou ${contador} vez(es), Excelente!`;
    botao.classList.add('pulsando');
  }
  else if (contador > 5) {
    resultado.textContent = `Você clicou ${contador} vez(es), Você está indo bem!`;
  }
  else {
    resultado.textContent = `Você clicou ${contador} vez(es), Clique mais!`;
  }
  console.log('Botão clicado! Contador:', contador);
}

function resetarContador() {
  contador = 0;
  resultado.textContent = 'Contador reiniciado';
  botao.classList.remove('pulsando');
  console.log('Contador resetado para 0');
}

botao.addEventListener('click', cliqueNoBotao);
botaoReset.addEventListener('click', resetarContador);
