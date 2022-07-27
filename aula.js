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

// if else 
let hora = 10;
if (hora > 6 && hora < 12) {
  console.log('Bom dia');
}
else if (hora > 12 && hora < 18) {
  console.log("Boa tarde");
}
else {
  console.log("Boa noite");
}

// SWITCH CASE 

let permissao = 'comum';

switch (permissao) {
  case 'comum':
    console.log('usuário comum');
    break;

  case 'gerente':
    console.log('usuario adm');
    break;

  default: //caso não seja nenhum dos casos acima
    console.log('User não reconhecido')
}

// Laço loop 
// 1. for
// 2. while
// 3 . do  while
// 4. for in 
// 5. for of 

// 1 for
for (let i = 0; i < 5; i++) {
  console.log('urubu', i);
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// 2 . while

let o = 5;
while (o >= 0) {
  if (o % 2 === 0) {
    console.log(o);
  }
  o--;

}
// 3.  do while 
let i = 0;
do {
  console.log('digitando', i);
  i++;
} while (i < 10)

//4 . for in imprime os objetos da classe e indices do vetor
const pesson = {
  nome: 'Jonatan',
  idade: 25
};

for (let chave in pesson) {
  console.log(chave);
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores) {
  console.log(indice);
}

//5 . for of muito melhor esse

for (let cor of cores) {
  console.log(cor);
}

// Exercicios 

// Escreva uma função que usa 2 números
// e retorna o maior entre eles 
let valorMaior = max(5, 9);
console.log(valorMaior);
function max(n1, n2) {

  if (n1 > n2) {
    return n1;
  } else return n2;

}

//FizzBuzz o que é? 
// Divisivel por 3 = Fizz
// Divisivel por 5 = Buzz 
// Divisivel por 3 e 5 = FizzBuzz
// se não for divisivel retorna o mesmo valor 
// Não é um número = 'Não é um número' 

const resultadox = fizzBuzz('iqwedsa');  //insira os valores nos parenteses para testar
console.log(resultadox);

function fizzBuzz(entrada) {
  if (typeof entrada !== 'number') {
    return 'Não é número imbecil';
  }
  if (entrada % 3 === 0 && entrada % 5 !== 0) {
    return 'Fizz';
  }
  if (entrada % 3 === 0 && entrada % 5 === 0) {
    return 'FizzBuzz';
  }
  if (entrada % 5 === 0 && entrada % 3 !== 0) {
    return 'Buzz';
  }
  if (entrada % 3 !== 0 && entrada % 5 !== 0) {
    return entrada;
  }
}

// Medidor de velocidade 
//Velocidade maxima ate 70
// a cada 5 km acima do limite voce ganha 1 ponto
//Math.floor()
// caso pontos maior que 12 Carteira suspendida
let x;
let p;
v = verificarVelocidade(50);
console.log(v);
console.log('Você tem', p, 'pontos');
function verificarVelocidade(velocidade) {
  if (velocidade > 70) {
    x = velocidade - 70;
    p = x / 5;
    if (p > 12) {
      return 'Carteira Vencida';
    }

  } else return velocidade;


}

// PAR OU ÍMPAR? 

//RECEBER UMA QUANTIDADE DE VALORES PARA AVALIAR
// FUNÇÃO EXIBE SE CADA VALOR É PAR OU ÍMPAR 


exibirTipo(10);

function exibirTipo(limite) {
  for (i = 0; i < limite; i++) {

    if (i % 2 === 0) {
      console.log(i, ' é Par');
    } else console.log(i, ' é Ímpar');
  }


}
//Criar um método para ler as propriedades
//de um objeto e exibir somente os strings 



const filme = {
  titulo: 'Vingadores',
  ano: 2018,
  diretor: 'Robin',
  personagem: 'doutor estranho'
}

exibirPropriedades(filme);

function exibirPropriedades(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'string') {
      console.log(prop, obj[prop]);
    }
  }


}

// Criar função que retorna a soma dos multiplos de 5 e 3
let soma = 0;
s = somar(10);
console.log(s);

function somar(limite) {
  for (let i = 1; i <= limite; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma = soma + i;
    }
  }

  return soma;
}




