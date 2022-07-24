//objetos
let pessoa = {
  nome: 'Israel',
  idade: 26,
  estaAprovado: true,
  sobrenome: 'Alves'

};

console.log(pessoa);

//arrays
//métodos são aplicados nos objetos ex:familia.lenght o lenght é método

let familia = [26, 45, 50, 17];
console.log(familia);
console.log(familia[2]);
console.log(familia.length);

//funções verbo+substantivo
let corSite = "azul";
console.log(corSite);
function resetaCor() {
  corSite = "";
}
resetaCor();
console.log(corSite);

function mudaCor(cor, tonalidade) {
  corSite = cor + tonalidade;
};
mudaCor("Preto", " Escuro");
console.log(corSite);

//tipos de funções 

//1 - Realiza uma tarefa e não devolve nada

function dizerNome() {
  console.log('jhonatan');
}

dizerNome();

// 2 - realiza tarefa e retorna algo

function multiplicarporDois(valor) {
  return valor * 2;
}

let resultado = multiplicarporDois(5);

console.log(resultado);

// Operadores Aritméticos
// Operadores Atribuição
// Operadores de Comparação 
// Operadores Lógicos 
// Operadores Bitwise 

// Aritméticos
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(5 ** 5);
console.log(salario / salario);

//icremento e decremento

let numero = 18;

console.log(numero++);
console.log(numero);

// mas se eu colocar o incremento antes 
//da variavel o resultado sera visivel
//na mesma linha 

console.log(++numero);
console.log(--numero);
console.log(numero--);
console.log(numero);

// atribuição 

let valorPc = 1000;
valorPc += valorPc;
console.log(valorPc);
valorPc -= valorPc;
console.log(valorPc);

// igualdade 
// estrita (recomendável)
console.log(1 === 1);
console.log('1' === 1);

//igualdade solta 

console.log(1 == 1);
console.log('1' == 1);

// lógico (ternário)

let pontos = 10;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);
pontos = 150;
tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// lógicos && || e ! (not)

let maiorDeidade = true;
let possuiCDT = true;

let podeAplicar = maiorDeidade && possuiCDT;
console.log(podeAplicar);

maiorDeidade = false;
possuiCDT = false;

podeAplicar = maiorDeidade || possuiCDT;
console.log('Canditado aprovado: ', podeAplicar);

podeAplicar = true;
let naoAprovado = !podeAplicar;
console.log('Candidato reprovado: ', naoAprovado);

//Falsy

//undefined
//null
//0
//false
//''
// NaN - not a number 

//Truthy tudo que não está aí em cima 

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);