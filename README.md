# Sistema de Gerenciamento Escolar

Este repositório contém os códigos-fonte de um sistema de gerenciamento escolar desenvolvido em Node.js, utilizando o framework Express.js, e Sequelize como ORM para interação com o banco de dados. O sistema utiliza Handlebars como template engine e permite o cadastro e gerenciamento de professores, turmas e atividades.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

```plaintext
projeto
│   README.md
│   app.js
│   package.json
│   .gitignore
│   package-lock.json
│
├── briefing-projeto
│   │   briefing-projeto.pdf
│
├── controllers
│   │   AtividadeController.js
│   │   LoginController.js
│   │   ProfessorController.js
│   │   TurmaController.js
│
├── helpers
│   │   verificaUsuario.js
│
├── models
│   │   Atividade.js
│   │   Database.js
│   │   Professor.js
│   │   Turma.js
│
├── public
│   └── diagramas
│       │   DER-projeto.brM3
│       │   DER-projeto.png
│       │   Lógico-projeto.brM3
│       │   Lógico-projeto.png
│
├── routes
│   │   atividade.js
│   │   index.js
│   │   login.js
│   │   professor.js
│   │   turma.js
│
└── views
    ├── atividade
    │   │   addAtividade.handlebars
    │   │   index.handlebars
    │   
    ├── layouts
    │   │   main.handlebars
    │   
    ├── partials
    │   │   mensagens.handlebars
    │   │   modal.handlebars
    │   │   navbar.handlebars
    │   
    ├── professor
    │   │   addProfessor.handlebars
    │   │   index.handlebars
    │   
    └── turmas
        │   index.handlebars
```
## Controllers

Os controladores são responsáveis por definir as operações para cada recurso do sistema.

- **AtividadeController.js**: Controlador responsável pelas operações relacionadas às atividades.
- **LoginController.js**: Controlador responsável pelas operações relacionadas à autenticação de usuários.
- **ProfessorController.js**: Controlador responsável pelas operações relacionadas aos professores.
- **TurmaController.js**: Controlador responsável pelas operações relacionadas às turmas.

## Helpers

A pasta helpers contém módulos auxiliares utilizados pela aplicação.

- **verificaUsuario.js**: Módulo para verificar se o usuário está autenticado.

## Models

A pasta models contém as definições dos modelos de dados que serão utilizados pelo Sequelize para representar as tabelas no banco de dados.

- **Atividade.js**: Definição do modelo de dados para atividades.
- **Database.js**: Configuração da conexão com o banco de dados.
- **Professor.js**: Definição do modelo de dados para professores.
- **Turma.js**: Definição do modelo de dados para turmas.

## Views

A pasta views contém os arquivos de visualização (templates) utilizados pelo Handlebars para renderização das páginas HTML.

- **atividade**: Pasta contendo os templates relacionados às atividades.
- **layouts**: Pasta contendo os layouts principais utilizados pelas páginas.
- **partials**: Pasta contendo os partials (trechos de código HTML reutilizáveis) utilizados pelos templates.
- **professor**: Pasta contendo os templates relacionados aos professores.
- **turmas**: Pasta contendo os templates relacionados às turmas.

## Dependências

O projeto utiliza as seguintes dependências:

- **connect-flash**
- **express**
- **express-handlebars**: Utilizado como template engine para renderização das páginas HTML.
- **express-session**
- **express-validator**
- **mysql2**
- **sequelize**
