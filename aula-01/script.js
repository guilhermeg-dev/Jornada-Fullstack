// 1. Log no console (mensagem para desenvolvedores)
console.log('🎉 JavaScript está funcionando!');

// 2. Selecionar elementos do HTML
const botao = document.getElementById('botao-magico');
const resultado = document.getElementById('resultado');

// 3. Variáveis (guardam informações)
let contador = 0;

// 4. Função (bloco de código reutilizável)
function cliqueNoBotao() {
  contador = contador + 1; // Incrementa o contador
  resultado.textContent = `Você clicou ${contador} vez(es)! 🎊`;
  console.log('Botão clicado! Contador:', contador);
}

// 5. Event Listener (escuta eventos do usuário)
botao.addEventListener('click', cliqueNoBotao);