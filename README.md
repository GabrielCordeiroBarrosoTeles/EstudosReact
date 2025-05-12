# Anotações do Curso de React JS - Udemy

Este documento reúne comandos iniciais para configurar um projeto com Vite, a estrutura básica da aplicação e as anotações dos dois primeiros módulos do curso de React JS.

---

## Comandos Iniciais

```bash
# Criar projeto
npm create vite@latest

# Navegar até a pasta do projeto
cd nome-da-pasta

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Explicação dos comandos:

* **cd nome-da-pasta**: entra na pasta criada pelo Vite.
* **npm install**: instala as dependências definidas no `package.json`.
* **npm run dev**: inicia o servidor de desenvolvimento com hot reload ativo.

---

## Estrutura Inicial de um Projeto Vite

```
nome-do-projeto/
├── .gitignore               # Arquivos ignorados pelo Git
├── README.md                # Documentação do projeto
├── eslint.config.js         # Configuração do ESLint
├── index.html               # Arquivo HTML principal
├── package-lock.json        # Versões exatas das dependências
├── package.json             # Dependências e scripts do projeto
├── public/                  # Arquivos públicos (acessíveis via URL)
│   └── vite.svg             # Exemplo de artefato estático
├── src/                     # Código-fonte da aplicação
│   ├── App.css              # Estilos globais
│   ├── App.jsx              # Componente principal (React)
│   ├── assets/              # Imagens e recursos
│   ├── index.css            # Estilos globais
│   └── main.jsx             # Ponto de entrada do JavaScript
└── vite.config.js           # Configuração do Vite
```

---

### Anotações do módulo Introdução ao React JS

* **Apresentação do curso:**

  * *Resumo:* visão geral dos objetivos, configuração do ambiente e fluxo de trabalho.
  * *Exemplo:* ao final da seção, você terá um aplicativo React simples exibindo “Hello, React!” no navegador.

* **Introdução ao React:**

  * *Resumo:* como as aulas estão organizadas e o que esperar.
  * *Exemplo:* o instrutor mostra um diagrama de componentes avançados, mas começaremos pelo básico.

* **O que é React JS?:**

  * *Resumo:* biblioteca para construir interfaces reativas com componentes, estado e Virtual DOM.
  * *Exemplo:* imagine uma lista de tarefas: quando você marca um item como concluído, apenas aquele item é atualizado no DOM em vez de reenviar toda a página.

* **Dependências essenciais:**

  * *Resumo:* o template gerado pelo Vite já inclui todas as dependências necessárias. Basta rodar `npm create vite@latest`, escolher React e seguir com `npm install` e `npm run dev`.
  * *Exemplo (trecho do `package.json` gerado):*

    ```json
    "dependencies": {
      "react": "^19.1.0",
      "react-dom": "^19.1.0"
    },
    "devDependencies": {
      "vite": "^6.3.5",
      "@vitejs/plugin-react": "^4.4.1",
      "eslint": "^9.25.0",
      "@eslint/js": "^9.25.0",
      "eslint-plugin-react-hooks": "^5.2.0",
      "eslint-plugin-react-refresh": "^0.4.19",
      "globals": "^16.0.0",
      "@types/react": "^19.1.2",
      "@types/react-dom": "^19.1.2"
    }
    ```

* **Hello World em React**

  * *Resumo:* criação de um componente funcional que retorna um elemento JSX e sua renderização.
  * *Exemplo de componente:*

    ```jsx
    // App.jsx
    import React from 'react';

    export default function App() {
      return <h1>Hello, React!</h1>;
    }
    ```

    ```jsx
    // main.jsx
    import React from 'react';
    import { createRoot } from 'react-dom/client';
    import App from './App.jsx';

    createRoot(document.getElementById('root')).render(<App />);
    ```

* **Estrutura básica do projeto:**

  * *Resumo:* papel de `App.jsx`, `main.jsx` e organização em `src/`.
  * *Exemplo de árvore de pastas:*

    ```
    src/
    ├── App.jsx
    ├── main.jsx
    └── assets/
        └── logo.png
    ```

* **Extensões recomendadas no VS Code:**

  * *Resumo:* ES7+ React Snippets, Prettier e ESLint.
  * *Exemplo de atalho ES7+:* digite `rfce` e pressione Enter para gerar um componente funcional completo.

* **Configuração do Emmet para JSX:**

  * *Resumo:* ajuste em `settings.json` do VS Code.
  * *Exemplo de configuração:*

    ```json
    {
      "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "html": "html"
      }
    }
    ```

* **Resumo da seção:**

  * Até aqui, você configurou o projeto, entendeu o básico de componentes e o fluxo de renderização em React.

---

### Anotações do módulo Fundamentos do React JS

* **Visão geral da seção:**

  * *Resumo:* estudo de JSX, props, eventos e hierarquia de componentes.
  * *Exemplo:* uma aplicação de contador, onde cada clique incrementa o valor exibido.

* **Criando componentes:**

  * *Resumo:* função JS que retorna JSX; convenção PascalCase; exportação/importação.
  * *Exemplo:*

    ```jsx
    export function MeuBotao() {
      return <button>Clique em mim</button>;
    }
    ```

* **Importação de componentes:**

  * *Resumo:* sintaxe `import Nome from './Nome.jsx'`.
  * *Exemplo:*

    ```jsx
    import { MeuBotao } from './MeuBotao.jsx';

    function App() {
      return <MeuBotao />;
    }
    ```

* **JSX:**

  * *Resumo:* sintaxe híbrida de JS e HTML; uso de `className`; inserção de variáveis.
  * *Exemplo:*

    ```jsx
    const cor = 'blue';
    return <div className={cor}>Texto colorido</div>;
    ```

* **Comentários em JSX:**

  * *Resumo:* `{/* ... */}` e JS padrão.
  * *Exemplo:*

    ```jsx
    {/* Isto é um comentário em JSX */}
    // Isto é um comentário em JS
    ```

* **Expressões no template:**

  * *Resumo:* interpolação de variáveis e chamadas de função.
  * *Exemplo:*

    ```jsx
    const saudacao = nome => `Olá, ${nome}`;
    return <p>{saudacao('Gabriel')}</p>;
    ```

* **Hierarquia de componentes:**

  * *Resumo:* componentes pai-filho; passagem de props.
  * *Exemplo:*

    ```jsx
    function Pai() {
      return <Filho mensagem="Olá do pai" />;
    }

    function Filho({ mensagem }) {
      return <span>{mensagem}</span>;
    }
    ```

* **Tratamento de eventos:**

  * *Resumo:* uso de `onClick`; callbacks diretos ou handlers.
  * *Exemplo direto:* `<button onClick={() => alert('clicou')}>Clique</button>`
  * *Exemplo com handler:*

    ```jsx
    function Botao() {
      function handleClick() {
        console.log('clicado');
      }
      return <button onClick={handleClick}>Clique</button>;
    }
    ```

* **Re-renderização e chaves em listas:**

  * *Resumo:* quando o estado muda, React atualiza apenas os componentes necessários.
  * *Exemplo simples:*

    ```jsx
    const frutas = ['Maçã', 'Banana', 'Laranja'];

    function ListaDeFrutas() {
      return (
        <ul>
          {frutas.map((fruta, index) => (
            <li key={index}>{fruta}</li>
          ))}
        </ul>
      );
    }
    ```

* **Resumo da seção:**:\*\*

  * Neste módulo, você aprendeu a criar, importar e interagir com componentes usando JSX e eventos.

> **Próximos passos:** aprofundar em Hooks (useState, useEffect), roteamento e consumo de APIs.
