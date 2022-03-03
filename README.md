# Boas vindas ao repositório do projeto Movie Card CRUD!

## Instruções iniciais
1. Clone o repositório
  * `git clone https://github.com/alexandredamasceno/Projeto-Movie-Card-CRUD`
2. Entre na pasta do repositório que você acabou de clonar:
  * `cd Projeto-Movie-Card-CRUD`
3. Instale as dependências
  * `npm install`
5. Para rodar o projeto:
 * `npm start`

# Habilidades

Nesse projeto, eu tive os seguintes desafios:

- Utilizar o componentDidMount para executar uma ação após o componente ser inserido no DOM;
- Utilizar o shouldComponentUpdate para avaliar se uma atualização do componente deve ou não acontecer naquele momento;
- Utilizar o componentDidUpdate para executar uma ação após o componente ser atualizado;
- Utilizar o componentWillUnmount para realizar uma ação antes de o componente ser desmontado;
- Utilizar o props.children para acessar os filhos de um componente React e interagir com eles;
- Utilizar o componente BrowserRouter corretamente;
- Criar links de navegação na aplicação com o componente Link ;
- Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route ;
- Estruturar e organizar as rotas da sua aplicação com o componente Switch ;
- Usar o componente Redirect pra alternar entre rotas;
- Realizar requisições assíncronas.

## O que foi desenvolvido

Um **CRUD** de cartões de filmes em React. 
A sigla **CRUD** significa, _Create, Read, Update and Delete_, então é possível realizar as seguintes operações nesse projeto:

  - Adicionar um novo filme à lista - **CREATE**;
  - Listar todos os filmes cadastrados, com uma página de informações resumidas sobre cada filme e uma página de informações detalhadas de um filme selecionado - **READ**;
  - Editar um filme da lista - **UPDATE**;
  - E apagar um filme da lista - **DELETE**;

# Tecnologias utilizadas
  - `HTML`;
  - `CSS`;
  - `Bootstrap`;
  - `Javascript`;
  - `React`.

## Desenvolvimento

Este app tem 4 rotas:

1. A rota raiz (index), no caminho `/`. Esta rota exibirá uma lista com todos os filmes cadastrados. Essa lista contém informações resumidas sobre cada filme.

2. Uma rota para criar novos filmes, no caminho `/movies/new`. Essa rota renderizará um formulário para adicionar um novo filme.

3. Uma rota para mostrar informações detalhadas de um filme, no caminho `/movies/:id`. Onde o `:id` é o parâmetro da URL que representa o _id_ do filme exibido. Por exemplo, ao entrar no caminho `/movies/5`, serão exibidas informações sobre o filme com _id_ `5`.

4. Uma rota para editar um filme, no caminho `/movies/:id/edit`. Assim como na rota 3, `:id` é o _id_ do filme a ser editado. Essa rota renderizará um formulário idêntico ao da rota 2. Nesse caso, porém, o formulário virá preenchido com as informações do filme a ser editado. Ao submeter o formulário, ao invés de criar um novo filme, o filme em questão terá seus dados atualizados.

Relacionado a cada rota haverá um componente React responsável por renderizar seu conteúdo. Esse mapeamento entre o caminho da URL, rota e componente será feito pelo `React Router`, a principal biblioteca de roteamento em `React`.

Naturalmente, haverá links de navegação e redirecionamento entre as diferentes rotas. Por exemplo, na rota 1 (caminho `/`), haverá, para cada filme, um link para a rota 3 (caminho `/movies/:id`), onde se poderá ver informações detalhadas sobre o filme escolhido. Na rota 3 (caminho `/movies/:id`), haverá um link para a rota 4 (caminho `/movies/:id/edit`), a fim de se editar informações do filme. Ao submeter o formulário, o app automaticamente será levado de volta à rota 3 (caminho `/movies/:id`), mostrando as informações atualizadas do filme. Tudo isso será feito utilizando os componentes da biblioteca `React Router`.

### ⚠️ É importante ressalta que nesse projeto os dados virão de uma API (simulada). Como ainda não tínhamos entrado no módulo de Backend e, por consequência, aprendido a criar API's, eu ultilizei essa API simulada(desenvolvida naquele momento pelos instrutures da Trybe) para criar, ler, atualizar e apagar filmes. É um projeto de início de curso que eu adorei fazer, por isso ele está nos meus pinados aqui no Github.

### ⚠️ Atenção: Esse é um projeto de avaliação da Trybe - instituição onde estou estudando. Todo o código desse projeto é meu, incluindo estrutura de pastas, exceto o código de implementação dos testes, esses foram feitos pelos instrutores da Trybe para testar as minhas implementações.
