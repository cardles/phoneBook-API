# phoneBook
API apresentada ao curso online de back-end da {reprograma}.  
Tema da semana: "Métodos HTTP: PUT + PATCH".
<br>
<br>


## documentação
### > demandas de negocio
- Quero uma rota principal pra visualizar a apresentação do projeto
- Quero visualizar todos os contatinhos
- Quero visualizar os contatinhos por nome
- Quero visualizar os contatinhos por id
- Quero adicionar novo contatinho
- Quero deletar contatinhos

### > rotas

{GET}/home  
apresentação do projeto

{GET}/contacts  
visualizar todos os contatos

{GET}/contacts/name  
buscar contatos por nome

{GET}/contact/:id  
buscar contato por id

{POST}/contact/add  
adicionar novo contato  
dados esperados: 
`{  
    id: autogerado,  
    nome: String,  
    celular: String,  
    redesSociais: String  
}`

{DELETE}/contact/dell/:id  
deletar contato por id
<br>

### > rodar com insomnia
Ao clicar no botão abaixo, você será redirecionado para o aplicativo Insomnia, onde poderá exportar as rotas automaticamente. Para isso, você precisa ter o aplicativo instalado em seu computador.  
Aproveite:
<br>

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=phoneBook&uri=https%3A%2F%2Fgithub.com%2Fcardles%2FphoneBook-API%2Fblob%2Fmain%2Fsrc%2Fview%2FInsomnia_2021-08-27.json)
