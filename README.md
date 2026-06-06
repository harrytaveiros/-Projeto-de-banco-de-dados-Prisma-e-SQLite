# 🗄️ Prisma & SQLite Database Project

Um projeto simples em Node.js utilizando **TypeScript**, **Prisma ORM** e **SQLite** para demonstrar operações básicas de banco de dados (Criação e Leitura relacionais).

## 🚀 Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)** - Ambiente de execução
* **[TypeScript](https://www.typescriptlang.org/)** - Superconjunto de JavaScript que adiciona tipagem estática
* **[Prisma](https://www.prisma.io/)** - ORM moderno para Node.js e TypeScript
* **[SQLite](https://www.sqlite.org/)** - Banco de dados leve e baseado em arquivo
* **[ts-node](https://typestrong.org/ts-node/)** - Motor de execução direta para TypeScript

## 📦 Instalação

1. Clone este repositório para sua máquina local:
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd DataBase
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## ⚙️ Configuração do Banco de Dados

1. Crie um arquivo `.env` na raiz do projeto (se ainda não existir) com a URL de conexão do banco de dados:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

2. Sincronize o schema do Prisma com o banco de dados (isso criará o arquivo `dev.db` e as tabelas `User` e `Post`):
   ```bash
   npx prisma db push
   ```
   *(Você também pode rodar `npx prisma migrate dev` caso queira criar um histórico de migrações).*

3. Gere a tipagem do Prisma Client (geralmente executado automaticamente no passo anterior):
   ```bash
   npx prisma generate
   ```

## 🏃‍♂️ Como Executar

Para rodar o script principal (`index.ts`) que cria um usuário com um post e lista os dados salvos, utilize o comando:

```bash
npm start
```

> **Nota:** O script `npm start` executa o comando `ts-node index.ts` configurado no `package.json`.

## 📂 Estrutura Principal

* `index.ts`: Ponto de entrada da aplicação contendo as operações (Queries) do Prisma.
* `prisma/schema.prisma`: Definição da conexão com o banco e modelagem das tabelas.
* `tsconfig.json`: Configurações do compilador TypeScript.
* `dev.db`: Arquivo gerado pelo SQLite que guarda os dados (não deve ser comitado).