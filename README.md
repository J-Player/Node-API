# REST API com NodeJS
Uma simple REST API com NodeJS + Express + MongoDB.

## Pré-requisitos
- Node 18 ou superior
- Docker

## Como usar
1 - Clone o repositório:
  <pre><code>git clone https://github.com/J-Player/node-api.git</code></pre>

2 - Na raiz do projeto, execute o `docker-compose.yml`:
  <pre><code>docker compose up -d</code></pre>
  - Caso deseje acessa a interface que administra o MongoDB (mongo-express), acesse:  
    <pre><code>http://localhost:8081/</code></pre>  
    Usuário: admin  
    Senha: pass

3 - Execute a aplicação:
  <pre><code>npm start</code></pre>
