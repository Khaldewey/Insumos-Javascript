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

// Calculando média de notas
// 0 - 59 F
// 60 - 69 D
// 70 - 79 C 
// 80 - 89 B
// 90 - 100 A


const array = [70, 70, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
  const media = calcularMedia(notas);
  if (media < 59) return 'F';
  if (media < 69) return 'D';
  if (media < 79) return 'C';
  if (media < 89) return 'B';
  return 'A'
}

function calcularMedia(array) {

  let soman = 0;
  for (let valor of array) {
    soman += valor;
  }
  return soman / (array.length);
}

// Criar uma função que exibe a quantidade de * que a linha possui 

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
  //let padrao = '';
  //for(let linha = 1;linha <= linhas;linha++){
  //   padrao += '*';
  //   console.log(padrao);
  //} 

  for (let linha = 1; linha <= linhas; linha++) {
    let padrao = '';
    for (let i = 0; i < linha; i++) {
      padrao += '*';
    }
    console.log(padrao);
  }

}

// Criar função para mostrar numeros primos 
// primos 
// compostos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
  for (let i = 1; i < limite; i++) {
    if (i === 2) console.log(i);
    if (i === 3) console.log(i);
    if (i % 2 !== 0 && i % 3 !== 0) console.log(i);
  }

}

exibirNumeroosPrimos(15);

function exibirNumeroosPrimos(limite) {
  for (let numero = 2; numero <= limite; numero++) {
    if (verificaSeEhPrimo(numero)) console.log(numero);
  }
}

function verificaSeEhPrimo(numero) {

  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false;

    }

  }
  return true;

}


//factory functions (função de fábrica) esse é massa

function criaCelular(marcaCelular, tamanhoTela, bateria) {
  return {
    marcaCelular,
    tamanhoTela,
    bateria,
    ligar: function () {
      console.log('Ligando ...');
    }
  }
}

const celular1 = criaCelular('Xiaomi', 5.5, 5000);
console.log(celular1);

//Camel case - umDoisTres
// Pascal Case - UmDois
//constructor function 

function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
  this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function () { console.log('Ligação...') }

}

const celular2 = new Celular('asus', 5.5, 5100);
console.log(celular2);

//Natureza dinânima de objetos 

const mouse = {
  cor: 'red',
  marcar: 'dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function () {
  console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);

//clonar objetos 

const telefone = {
  marca: 'Asus',
  tamanhoDaTela: {
    vertical: 155,
    horizontal: 75
  },
  ligar: function () {
    console.log("Fazendo Ligação...");
  }

}

//const novoCelular = Object.assign({}, telefone);
// pode colocar novas propriedades dentro
//desse objeto veja: 
const novoCelular = Object.assign({
  bateria: 5000
}, telefone);

console.log(novoCelular);

const objeto2 = { ...telefone };
console.log(objeto2);

// math  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs


// métodos de string

//Tipo primitivo
const mensagem = 'minha primeira mensagem';
//tipo objeto
const outraMensagem = new String('bom dia');
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String


//template literal

const mensgem = 'oi isso é a minha\n' +
  '\'primeira\' mensaem';

// Object{}
// Boolean true,false
// string '',""
// Template `` esse é o brabo

const outra = `Oi isso é a minha
'segunda'mensagem`;

const email = `Olá
           obrigado
           
           israel`;

//Date 

const data1 = new Date(); // informações data atual 
const data2 = new Date(2022, 07, 29, 17, 30);

data2.setFullYear(2090);

// montador de endereço 

let endereco = {
  rua: 'a',
  cidade: 'b',
  cep: 'c'
};

function exibirEndereco(endereco) {
  for (let chave in endereco)
    console.log(chave, endereco[chave]);
}

exibirEndereco(endereco);

// igualdade de objetos 

function Endereco(rua, cidade, cep) {
  this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');
const endereco3 = endereco1;
function saoIguais(endereco1, endereco2) {
  return endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep

}


function temEnderecoMemoriaIguais(endereco1, endereco2) {
  return endereco1 === endereco2;
}

console.log(saoIguais(endereco1, endereco2));
console.log(temEnderecoMemoriaIguais(endereco1, endereco2));
console.log(temEnderecoMemoriaIguais(endereco1, endereco3));

// objeto postagem de blog 

let postagem = {
  titulo: 'a',
  mensagem: 'b',
  autor: 'c',
  visualizacoes: 10,
  comentarios: [
    { autor: 'a', mensagem: 'b' },
    { autor: 'a', mensagem: 'b' }     // array de objetos
  ],
  estaAoVivo: true
}

console.log(postagem);

//Arrays 
// add novos elementos
// encontrar elementos
// remover elementos
// dividir elementos
// dividir arrays
// combinar arrays 

// Adicionando elementos no array

const nmeros = [1, 2, 3];
//inicio
nmeros.unshift(0);
console.log(nmeros);
// meio
nmeros.splice(1, 0, 'a');
console.log(nmeros);
//final
nmeros.push(5);
console.log(nmeros);

// Encontrando elemento no array
// tipo primitivo
console.log(nmeros.indexOf(2));
nmeros.splice(5, 0, 1);
console.log(nmeros);
console.log(nmeros.lastIndexOf(1));
console.log(nmeros.indexOf(2) !== -1);
console.log(nmeros.includes(2));

// Encontrando elemento no array
// tipo referencia

const marcas = [
  { id: 1, nome: 'a' },
  { id: 2, nome: 'b' },
];

const marca = marcas.find(function (marca) {
  return marca.nome === 'a';
})

console.log(marca);

// Arrow functions 

/*const marca = marcas.find((marca) => marca.nome === 'a');
})*/


// Removendo elementos do array 

// final
const ultimo = nmeros.pop();
console.log(ultimo);
// inicio
const primeiro = nmeros.shift();
// meio
const meio = nmeros.splice(2, 1);
console.log(nmeros);

// Esvaziando um array 

const numerosos = [1, 2, 3, 4, 5, 6];

//solução 1 
//numeros = [] se for let

// solução 2 

// recomendável
numerosos.lenght = 0; // apaga ate se estiver em outra variavel

// soluçao 3 

//numerosos.splice(0,numerosos.lenght);

// solução 4 

//while (numerosos.lenght > 0)
//  numerosos.pop();


// Combinando Arrays
// combinar
const primeiroo = [1, 2, 3];
const segundoo = [4, 5, 6];

const combinado = primeiroo.concat(segundoo);
console.log(combinado);

// dividir

const cortado = combinado.slice(1);
console.log(cortado);


//Operador Spread
//combinacao de array com es6
const novaCombinacao = [...primeiroo, 'a', ...segundoo, 'a'];
console.log(novaCombinacao);

//clonagem de array
const clonado = [...novaCombinacao];
console.log(clonado);

// Foreach 
clonado.forEach((numero, indice) => console.log(numero, indice));

// Combinando string em array

const qualquer = [1, 2, 3];

const combQualquer = qualquer.join('.');
console.log(combQualquer);

const frase = "acaba a merda do batch";
const cutFrase = frase.split(' ');
console.log(cutFrase);

console.log(cutFrase.join('-'));