# API Fórmula 1
Este projeto é uma API REST minimalista desenvolvida para gerenciar dados sobre equipes e pilotos da Fórmula 1. O projeto foi construído utilizando o Boilerplate BLUE EDITION, seguindo os ensinamentos do Professor Felipe Aguiar durante o desafio de projeto para o Bootcamp DIO - Jornada para o Futuro.

## 🎬 Vídeo do funcionamento:

## 🚀 Sobre o Desafio
O objetivo deste desafio foi colocar em prática o desenvolvimento de um backend performático utilizando Fastify e TypeScript, explorando rotas dinâmicas, tratamento de parâmetros e respostas em formato JSON.

## 🛠️ Tecnologias e Padrões
Node.js: Ambiente de execução.

Fastify: Framework focado em baixo overhead e alta performance.

TypeScript: Tipagem estática para maior segurança.1

Boilerplate BLUE EDITION: Estrutura padronizada pelo Professor Felipe Aguiar para agilizar o desenvolvimento de APIs modernas.

Thunder Client: Testes de rotas integrados ao VS Code.

## 🏁 Funcionalidades (Endpoints)
GET /teams: Lista todas as 10 equipes da F1 (2026).

GET /teams/:id: Detalhes de uma equipe específica (ex: Ferrari, McLaren).

GET /drivers: Grid completo com os 22 pilotos da temporada.

GET /drivers/:id: Detalhes de um piloto específico (ex: Lewis Hamilton na Ferrari).

## 💻 Como Executar
Clone o repositório.

No terminal, use npm install para baixar as dependências.

Inicie o servidor com npm run dev (ou o comando de script definido no seu package.json).

Utilize o Thunder Client no VS Code para testar as requisições em http://localhost:3333.

📝 Créditos e Agradecimentos
Projeto desenvolvido por Ana Haiek sob orientação de Felipe Aguiar na plataforma DIO (Digital Innovation One).
