# 📝 Blog Escritor e editor de artigos e categorias

Este é um blog onde os usuários podem criar, atualizar, deletar e editar categorias e artigos. Ele possui um editor de texto TinyMCE, controle de sessões e autenticação.

## 📋 Pré-requisitos 📋

Antes de iniciar, certifique-se de ter os seguintes softwares instalasdo em sua máquina local:

Node.js
MySQL

## 🚀 Como Iniciar 🚀

1. Clone o repositório.
2. Execute `npm install` para instalar todas as dependências.
3. Inicie o servidor com `npm run dev`.
4. Acesse `http://localhost:3000` no seu navegador.


## 📂 Estrutura de Pastas

- 📁 **articles**
  - 📄 article.js
  - 📄 ArticlesController.js
  
- 📁 **categories**
  - 📄 categoriesController.js
  - 📄 category.js
  
- 📁 **database**
  - 📄 database.js
  
- 📁 **middleware**
  - 🔒 adminAuth.js
  
- 💻 **node_modules**

- 👥 **public**
  - 👤 user
    - user.js
    - UserController.js
    
- 👀 **views**
  - 🔐 admin
    - ✏️ articles 
      - edit.ejs 
      - index.ejs 
      - new.ejs 
      - page.ejs
      
    - ✏️ categories 
      - edit.ejs 
      ...
      
    ...
    
## ⚙️ Funcionalidades

### Usuários

Os usuários podem se cadastrar e logar no sistema.

### Categorias 

Os usuários autenticados podem:
🔹 Criar novas categorias.
🔹 Atualizar categorias existentes.
🔹 Deletar categorias.
🔹 Editar detalhes das categorias.

### Artigos 

Com o editor de texto TinyMCE, os usuários podem:
- ✏️ Escrever artigos ricos em formatação.
- ✏️ Atualizar seus próprios artigos.
- ✏️ Deletar artigos.
- ✏️ Visualizar todos os artigos publicados.

## 🔐 Autenticação 

O sistema possui um  controle de sessões e autenticação para garantir que apenas usuários autorizados possam criar, editar ou deletar conteúdo.

## 🤝 Contribuição 🤝

Sinta-se à vontade para contribuir com este projeto, fazendo um fork e criando pull requests ou abrindo issues.
