console.log('✅ Calculadora de IMC carregada!');

// 1. Selecionar elementos do HTML
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const botaoCalcular = document.getElementById('calcular');
const botaoLimpar = document.getElementById('limpar');
const divResultado = document.getElementById('resultado');
const valorIMC = document.getElementById('valor-imc');
const classificacaoTexto = document.getElementById('classificacao');

// 2. Função para calcular IMC
function calcularIMC(peso, altura) {
  // Fórmula: IMC = peso / (altura²)
  return peso / (altura ** 2);
}

// 3. Função para classificar o IMC
function classificarIMC(imc) {
  if (imc < 18.5) {
    return {
      texto: 'Abaixo do peso',
      classe: 'abaixo'
    };
  } else if (imc >= 18.5 && imc < 25) {
    return {
      texto: 'Peso normal',
      classe: 'normal'
    };
  } else if (imc >= 25 && imc < 30) {
    return {
      texto: 'Sobrepeso',
      classe: 'sobrepeso'
    };
  } else {
    return {
      texto: 'Obesidade',
      classe: 'obesidade'
    };
  }
}

// 4. Função principal ao clicar em "Calcular"
function aoClicarCalcular() {
  // 4.1 Pegar valores dos inputs
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // 4.2 Validar dados
  if (peso <= 20 || peso >= 300) {
    alert('Por favor, insira um peso valido!');
    return; // Para a execução aqui
  }
  else if (altura <= 0.5 || altura >= 2.5) {
    alert('Por favor, insira uma altura valida!')
    return;
  }

  // 4.3 Calcular IMC
  const imc = calcularIMC(peso, altura);

  // 4.4 Classificar IMC
  const classificacao = classificarIMC(imc);

  // 4.5 Exibir resultado
  valorIMC.textContent = imc.toFixed(1); // 1 casa decimal
  classificacaoTexto.textContent = classificacao.texto;

  // 4.6 Remover classes antigas e adicionar nova
  divResultado.classList.remove('abaixo', 'normal', 'sobrepeso', 'obesidade');
  divResultado.classList.add(classificacao.classe);

  // 4.7 Mostrar resultado
  divResultado.classList.remove('escondido');

  // 4.8 Log para debug
  console.log(`IMC calculado: ${imc.toFixed(1)} - ${classificacao.texto}`);
}

// 5. Função para limpar tudo
function aoClicarLimpar() {
  inputPeso.value = '';
  inputAltura.value = '';
  divResultado.classList.add('escondido');
  console.log('Formulário limpo');
}

// 6. Adicionar event listeners
botaoCalcular.addEventListener('click', aoClicarCalcular);
botaoLimpar.addEventListener('click', aoClicarLimpar);

// 7. EXTRA: Calcular ao pressionar Enter nos inputs
inputPeso.addEventListener('keypress', function (evento) {
  if (evento.key === 'Enter') {
    aoClicarCalcular();
  }
});

inputAltura.addEventListener('keypress', function (evento) {
  if (evento.key === 'Enter') {
    aoClicarCalcular();
  }
});