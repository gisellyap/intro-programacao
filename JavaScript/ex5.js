//criar um programa que calcula a média
//das turmas alunos e envia
//mensagem do cálculo da média

const alunosDaTurmaA =[{
		nome:"marcele",  //objeto(0)
	    nota:5
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
	    nota:9
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



const media = (alunosDaTurmaA[0].nota + alunosDaTurmaB[0].nota) / 2


// se a média for maior que 5, parabenizar a turma
if(media > 5){
	console.log(`A media foi de ${media}.Parabéns`)

}else { 
	console.log('A media é menor que 5')
}



console.log(media)