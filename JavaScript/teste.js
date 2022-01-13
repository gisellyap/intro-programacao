// criar um array que represente um carrinho de compras
//conter varios objetos com propriedades de: descrição, quantidade e valor


const carrinho01 = [{
		descricao:'salsicha',
		quantidade:20,
		valor:1.5
	},
	{
		descricao:'macarrao',
		quantidade:3,
		valor:4
	},
	{
		descricao:'tomate',
		quantidade:15,
		valor:1
	},
	{
		descricao:'molho',
		quantidade:2,
		valor:6
	}
]

const carrinho02 =[{
		descricao:'carne',
		quantidade:8,
		valor:28
	},
	{
		descricao:'arroz',
		quantidade:3,
		valor:6
	},
	{
		descricao:'farinha',
		quantidade:5,
		valor:7
	},
	{
		descricao:'calabresa',
		quantidade:6,
		valor:4
	}
]


const total1 = (carrinho01[0].quantidade * carrinho01[0].valor)
const total2 = (carrinho01[1].quantidade * carrinho01[1].valor)
const total3 = (carrinho01[2].quantidade * carrinho01[2].valor)
const total4 = (carrinho01[3].quantidade * carrinho01[3].valor)

  
const totalCarrinho01 = (total1+ total2 + total3 + total4)


console.log (`total do carrinho01 é de ${totalCarrinho01}`)


const carne = (carrinho02[0].quantidade * carrinho02[0].valor)
const arroz = (carrinho02[1].quantidade * carrinho02[1].valor)
const farinha = (carrinho02[2].quantidade * carrinho02[2].valor)
const calabresa = (carrinho02[3].quantidade * carrinho02[3].valor)


const totalCarrinho02 = (carne + arroz + farinha + calabresa)


console.log (`total do carrinho02 é de ${totalCarrinho02}`)