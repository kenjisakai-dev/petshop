# 🐶 Petshop — Aplicação Web de Agendamentos

Aplicação web desenvolvida para **gerenciar agendamentos de um petshop**, permitindo criar, listar e remover horários disponíveis de forma simples.

O projeto foi construído com **JavaScript puro**, utilizando **Webpack** como ferramenta de build e **json-server** como API fake para simular um backend.

---

## 🚀 Funcionalidades

- Criar novos agendamentos
- Listar agendamentos por dia
- Separar agendamentos por período (manhã, tarde e noite)
- Impedir agendamentos em horários já ocupados
- Bloquear horários passados automaticamente
- Remover agendamentos
- Interface com modal e controle de scroll

---

## 🧠 Aprendizados em JavaScript

Durante o desenvolvimento da aplicação, foram praticados diversos conceitos importantes de **JavaScript moderno**:

### 📌 Manipulação do DOM

- Criação dinâmica de elementos (`createElement`, `append`)
- Uso de `data-attributes` para controle de estado
- Delegação de eventos (`event.target`, `closest`)

### 📌 Eventos

- `DOMContentLoaded`
- `click`, `change`, `submit`
- Prevenção de comportamento padrão (`event.preventDefault()`)

### 📌 Organização do código

- Separação por responsabilidades (modules, services, libs)
- Importação e exportação de módulos ES (`import / export`)
- Código mais legível e reutilizável

### 📌 Datas e horários

- Uso da biblioteca **dayjs** para:

  - Comparar datas (`isBefore`, `isSame`)
  - Formatar horários (`format('HH:mm')`)
  - Ordenar agendamentos por hora

### 📌 Regras de negócio

- Bloqueio de horários passados
- Bloqueio de horários já agendados
- Validação dinâmica de horários disponíveis

---

## 🛠️ Aprendizados com Webpack

O Webpack foi utilizado para transformar o projeto em uma aplicação organizada e pronta para produção.

### 📦 Principais conceitos aprendidos

- **Entry point** para centralizar imports
- **Bundle** de arquivos JS e CSS
- Uso de loaders para processar arquivos
- Automação do build

### 📁 Estrutura com Webpack

- `src/` → código fonte
- `docs/` → arquivos finais gerados
- Importação de CSS diretamente no JavaScript

---

## ⚙️ Bibliotecas e ferramentas de build

### 🔹 Webpack

Responsável por empacotar toda a aplicação.

### 🔹 webpack-dev-server

- Servidor de desenvolvimento
- Hot reload automático

### 🔹 Babel

- Transpila JavaScript moderno para maior compatibilidade
- Uso do `@babel/preset-env`

### 🔹 Loaders

- `css-loader` → interpreta CSS
- `style-loader` → injeta CSS no DOM
- `babel-loader` → processa JS

### 🔹 Plugins

- `HtmlWebpackPlugin`

  - Injeta automaticamente o bundle no HTML

- `CopyWebpackPlugin`

  - Copia arquivos estáticos (assets)

---

## 🧪 API Fake com json-server

Para simular um backend, foi utilizado o **json-server**.

### 📄 Funcionalidades da API

- Criar agendamentos (`POST`)
- Listar agendamentos (`GET`)
- Remover agendamentos (`DELETE`)

---

### ▶️ Rodando a API

```bash
npm run server
```

A API roda em:

```txt
http://localhost:3334
```

### 📌 Vantagens do json-server

- Rápido para testes
- Simula uma REST API real
- Ideal para estudos e protótipos

---

## ▶️ Como executar a aplicação

### 1️⃣ Instalar as dependências

```bash
npm install
```

---

### 2️⃣ Executar a API fake (json-server)

Em um terminal separado, execute:

```bash
npm run server
```

A API ficará disponível em:

```txt
http://localhost:3334
```

---

### 3️⃣ Gerar o build inicial

Antes de rodar o ambiente de desenvolvimento, gere o build:

```bash
npm run build
```

---

### 4️⃣ Executar a aplicação em modo desenvolvimento

Com a API rodando e o build gerado, execute:

```bash
npm run dev
```

A aplicação será aberta automaticamente em:

```txt
http://localhost:3000
```

---

## 🎯 Conclusão

Este projeto foi fundamental para consolidar:

- JavaScript moderno
- Organização de código frontend
- Uso real de Webpack
- Integração frontend + API
- Simulação de regras de negócio

É uma base sólida para evoluir para frameworks como **React**, **Vue** ou **Angular**, além de integrar com backends reais no futuro.
