# 🤖 AI Test Case Generator

Uma aplicação web que utiliza Inteligência Artificial para gerar automaticamente casos de teste no padrão **BDD (Behavior-Driven Development)** a partir de requisitos funcionais descritos em linguagem natural.

Este projeto foi desenvolvido para a disciplina de **Sistemas Inteligentes Aplicados**, demonstrando a aplicação de IA Generativa no apoio às atividades de Engenharia de Software e Qualidade de Software.

---

# 📖 Objetivo

O objetivo da ferramenta é automatizar a geração de casos de teste BDD, reduzindo o esforço manual na elaboração de cenários de teste e auxiliando analistas, desenvolvedores e testadores durante a etapa de validação de requisitos.

A aplicação recebe um requisito funcional e utiliza a API do Google Gemini para interpretar o texto e gerar cenários estruturados utilizando o padrão Gherkin.

---

# 🚀 Funcionalidades

- ✅ Geração automática de casos de teste utilizando IA
- ✅ Casos de teste no padrão BDD (Gherkin)
- ✅ Interface simples e intuitiva
- ✅ Copiar casos de teste para a área de transferência
- ✅ Exportar casos de teste em arquivo `.feature`
- ✅ Limpar requisito e resultado
- ✅ Indicador de carregamento durante a geração
- ✅ Comunicação entre Frontend, Backend e API Gemini

---

# 🛠 Tecnologias Utilizadas

## Frontend

- React
- Bootstrap 5
- JavaScript
- HTML5
- CSS3

## Backend

- Node.js
- Express
- Google Gemini API
- dotenv

---

# 🏗 Arquitetura

```text
                 +----------------------+
                 |     Frontend React   |
                 +----------+-----------+
                            |
                            |
                     Requisição HTTP
                            |
                            ▼
                 +----------------------+
                 |    Backend Express   |
                 +----------+-----------+
                            |
                            |
                   Prompt para IA
                            |
                            ▼
                Google Gemini API
                            |
                            ▼
          Casos de Teste em formato BDD
                            |
                            ▼
                 Frontend exibe resultado
```

---

# 📂 Estrutura do Projeto

```text
ai-test-case-generator
│
├── backend
│   ├── src
│   │   ├── routes
│   │   ├── services
│   │   └── server.js
│   ├── package.json
│   └── .gitignore
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

---

# ⚙️ Como executar

## Clone o repositório

```bash
git clone https://github.com/cleitonhoralino/ai-test-case-generator.git
```

---

## Backend

```bash
cd backend

npm install

npm start
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Configuração da API

Crie um arquivo `.env` dentro da pasta **backend** contendo:

```env
GEMINI_API_KEY=SUA_CHAVE_DA_API
```

A chave pode ser obtida através do Google AI Studio.

---

# 💡 Exemplo de Requisito

```
O sistema deve permitir que usuários realizem login utilizando e-mail e senha.
```

---

# ✅ Exemplo de Saída

```gherkin
Feature: Autenticação de Usuário

Scenario: Login com credenciais válidas

Given o usuário está na página de login
When informa e-mail e senha válidos
Then o sistema deve autenticar o usuário
And redirecioná-lo para a página inicial
```

---

# 🧪 Casos de Uso Testados

Durante o desenvolvimento, a ferramenta foi validada utilizando requisitos de diferentes domínios, como:

- Login de usuários
- Cadastro de usuários
- Recuperação de senha
- Carrinho de compras
- Checkout
- Pagamento via PIX
- Agendamento de consultas
- Reserva de hotéis
- Controle de estoque
- Sistema bancário
- Cadastro de produtos

Os resultados demonstraram que a IA foi capaz de gerar cenários positivos e negativos de forma consistente utilizando o padrão BDD.

---

# 🔮 Melhorias Futuras

- Seleção do tipo de teste (Funcional, Negativo e Borda)
- Geração de cenários em formato tabular
- Exportação em PDF
- Histórico de gerações
- Integração com Jira ou Azure DevOps
- Suporte para múltiplos idiomas
- Geração automática de scripts para Cypress ou Playwright

---

# 👨‍💻 Autor

**Cleiton Horalino Soares de Morais**

Curso de Engenharia de Software

Universidade Tecnológica Federal do Paraná (UTFPR)

---

# 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos.
