# programa :computer:
{	

	funcao inicio()
	{
		real venda1,venda2,venda3,media,soma
		cadeia funcionario
		escreva("Digite seu nome: ")	
		leia(funcionario)
		escreva("Digite o valor referênte ao mês de janeiro: ")
		leia(venda1)
		escreva("Digite o valor referênte ao mês de fevereiro: ")
		leia(venda2)
		escreva("Digite o valor referênte ao mês de janeiro: ")
		leia(venda3)
		media = (venda1+venda2+venda3)/3
		soma = (venda1+venda2+venda3)
		escreva("Ao total você vendeu " + soma + " e obtive uma média de " + media + " ao mês")
	}
}