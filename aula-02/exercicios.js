const meuNome = 'Guilherme'
const minhaIdade = 15
const souEstudante = true
const meuCarro = null
let meuEndereco;

console.log(typeof minhaIdade)
console.log(typeof souEstudante)
console.log(typeof meuEndereco)
console.log(typeof meuCarro)
console.log(typeof meuNome)

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function restoDivisao(a, b) {
  return a % b;
}

console.log(somar(10, 5));      // 15
console.log(subtrair(10, 5));   // 5
console.log(multiplicar(10, 5)); // 50
console.log(dividir(10, 5));    // 2
console.log(restoDivisao(10, 3)); // 1

// Complete as comparações
console.log(10 === '10');  // false
console.log(10 == '10');   // true
console.log(5 > 3);        // true
console.log(5 < 3);        // false
console.log(5 >= 5);       // true
console.log(null === undefined); // nao sei
console.log(null == undefined);  // nao sei

// Crie uma função que verifica se um número é par
function ehPar(numero) {
  return numero % 2 === 0; // Se resto da divisão por 2 é 0, é par
}
// nao entendi o que fazer aqui

console.log(ehPar(4));  // true
console.log(ehPar(7));  // false

function podeDirigir(idade, temCarteira) {
  if (idade >= 18) {
    console.log('Pode dirigir.')
  }
  else {
    console.log('Não pode dirigir.')
  }
}

console.log(podeDirigir(20, true))
console.log(podeDirigir(20, false))
console.log(podeDirigir(16, true))


const idade = 16
const temautorizacao = true

function podeEntrarnaFesta(idade, temautorizacao) {
  if (idade >= 18 || (idade >= 16 && temautorizacao)) {
    console.log('Pode Entrar!')
  }
  else {
    console.log(`Nao pode entrar!`)
  }
}

console.log(podeEntrarNaFesta(20, false)); // true (maior de 18)
console.log(podeEntrarNaFesta(17, true));  // true (16+ com autorização)
console.log(podeEntrarNaFesta(15, true));  // false (menor de 16)

const texto1 = '42';
const texto2 = '3.14';

const numero1 = Number(texto1);
const numero2 = parseFloat(texto2);

console.log(numero1 + 10);
console.log(numero2 * 2);

function somarStrings(str1, str2) {
  const num1 = Number(str1);
  const num2 = Number(str2);
  return num1 + num2;
}

console.log(somarStrings('10', '20'))