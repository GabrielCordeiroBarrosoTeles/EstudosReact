# Anotações

```bash
npm create vite@latest
```

Siga as instruções interativas para dar nome ao projeto e escolher o framework (ex: Vanilla, Vue, React...).

```bash
cd nome-da-pasta
npm install
npm run dev
```

### Explicação dos comandos:

* `cd nome-da-pasta`: entra na pasta criada pelo Vite.
* `npm install`: instala as dependências do projeto definidas no `package.json`.
* `npm run dev`: inicia o servidor de desenvolvimento com hot reload ativo.

---

## Explicando um pouco da arquitetura

Ao criar um projeto com Vite, a estrutura inicial se parece com:

```
nome-do-projeto/
└── src/
    ├── .gitignore               # Arquivos a serem ignorados pelo Git
    ├── README.md                # Documentação do projeto
    ├── eslint.config.js          # Configuração do ESLint
    ├── index.html                # Arquivo HTML principal
    ├── package-lock.json         # Versões exatas das dependências
    ├── package.json              # Dependências e scripts do projeto
    ├── public/                   # Arquivos públicos (acessíveis via URL)
    │   └── vite.svg              # Exemplo de arquivo estático
    ├── src/                      # Código-fonte da aplicação
    │   ├── App.css               # Estilos globais do App
    │   ├── App.jsx               # Componente principal (React)
    │   ├── assets/               # Imagens e outros recursos
    │   ├── index.css             # Estilos globais
    │   └── main.jsx              # Ponto de entrada do JavaScript
    └── vite.config.js            # Configuração do Vite
```

---

