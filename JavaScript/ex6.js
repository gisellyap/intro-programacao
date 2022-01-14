//criar um programa que calcula a média
//das turmas alunos e envia
//mensagem do cálculo da média


//agora com funções


const alunosDaTurmaA =[{
		nome:"marcele",  //objeto(0)
	    nota:9
	},
	{
	   nome:"joão",    //objeto(1)
	   nota: 7
	},
	{
		nome:"maria",    //objeto(2)
	    nota:5
	}
]




const alunosDaTurmaB =[{
		nome:"cleiton",  //objeto(0)
	    nota:0
	},
	{
	   nome:"caroline",    //objeto(1)
	   nota: 3
	},
	{
		nome:"ana",    //objeto(2)
	    nota:6
	}
]


function calculaMedia(alunos){
	return ( alunos[0].nota+ alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

console.log(media1) // não imprimir com esse log
console.log(media2)



function enviaMensagem(media,turma) {

	if(media>5) {
		console.log(`A media da turma ${turma} foi de${media}. Parabéns`)
	}else {
		console.log(`A media da turma ${turma} é menor que 5`)
	}
}


enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')