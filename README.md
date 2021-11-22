# desafio_api_pessoas
Projeto com API criada em Java (Spring) que faz cadastro, remoção, atualização, busca de uma pessoa e busca de todas as pessoas em um banco de dados do tipo PostgreSQL, e front-end criado em HTML, CSS e Javascript puros. O banco de dados foi criado utilizando o ORM Hibernate.

# Requisitos para rodar o projeto
- [Git](https://git.scm.com)
- [Java 11 LTS](https://www.azul.com/downloads/?package=jdk)
- [Spring Tools Suite 4](https://spring.io/tools)
- [Banco de dados PostgreSQL](https://www.postgresql.org/download/)
- [Postman](https://www.postman.com/downloads/) (opcional)

# Como rodar o projeto localmente

- Crie uma pasta chamada projeto-desafio-api
- Dentro da pasta, abra um terminal do Git e rode os seguintes comandos: 
1. git init
2. git remote add origin https://github.com/SamuelFST/desafio_api_pessoas.git
3. git pull origin main

- Logo após, entre no Spring Tools Suite 4 para fazer a importação do projeto seguindo essas etapas:
1. Clique na opção File do menu no topo da IDE e clique na opção "Import"
2. Dentro da caixa que será aberta, abra as opções do Maven e selecione a opção "Existing Maven Projects"
3. Clique em "Browse" e selecione a pasta onde foi feito o git pull
4. Selecione o pom.xml e clique em "Finish"

- Após essas etapas talvez seja necessário atualizar o projeto, e para isso, siga as seguintes etapas:
1. Clique com o botão direito do mouse em cima do projeto no menu da IDE no lado esquerdo
2. Vá até a opção "Maven" e selecione "Update project"
3. Dentro da caixa que será aberta, selecione o projeto e a opção "Force Update of Snapshots/Releases" e clique em OK

- As configurações para conexão com o banco de dados ficam na pasta resources, dentro do arquivo [application.properties](https://github.com/SamuelFST/desafio_api_pessoas/blob/main/src/main/resources/application.properties). Nesse arquivo você deve configurar o usuário, senha e porta que o banco está rodando, caso seja necessário.
- Nesse ponto você já poderá iniciar o servidor pelo Spring Tools Suite 4 e fazer requisições à API. Se quiser ter acesso ao front-end da aplicação ou não quiser usar o Postman para fazer as requisições, basta abrir o index.html que está na pasta view do projeto, assim usando o front-end para enviar as requisições para a API, e não necessitando do uso do Postman.


