const nome = `giselly`;
const idade = 19;
const nascimento ="11/02/2002";

const frase = `meu nome é ${nome}, minha idade é ${idade} e nasci ${nascimento}`



//criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média 

const aluno01 = "Mayk"
const notaAluno01 = 3

const aluno02 = 'Diego'
const notaAluno02 = 10

const aluno03 = 'giselly'
const notaAluno03 = 2

const media =  (notaAluno01 + notaAluno02 + notaAluno03) / 3

// se a média for menor que 5, parabenizar a turma
if (media > 5){
	console.log(`A media foi de ${media}. Parabéns`)
}else {
	console.log('A media é menor que 5')
}
console.log(media)