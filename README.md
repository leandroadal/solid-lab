# solid-lab

Repositório de aprendizado pessoal dos princípios **SOLID** aplicados com **TypeScript**.

---

## O que é SOLID?

SOLID é um acrônimo para cinco princípios de design orientado a objetos que tornam o código mais legível, flexível e fácil de manter:

| Letra | Princípio | Descrição resumida |
|---|---|---|
| **S** | Single Responsibility Principle | Uma classe deve ter apenas um motivo para mudar |
| **O** | Open/Closed Principle | Aberto para extensão, fechado para modificação |
| **L** | Liskov Substitution Principle | Subtipos devem ser substituíveis por seus tipos base |
| **I** | Interface Segregation Principle | Prefira interfaces específicas a interfaces genéricas |
| **D** | Dependency Inversion Principle | Dependa de abstrações, não de implementações concretas |

---

## Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/)

### Instalação

```bash
git clone https://github.com/leandroadal/solid-lab.git
cd solid-lab
npm install
```

### Executar um exemplo

```bash
# Compilar
npm run build

# Ou rodar diretamente com npx
npx npx src/s-single-responsibility/pasta/archive.ts
```

---

## Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) — lint do código

---

## Referências

- [Princípios SOLID — Wikipedia](https://pt.wikipedia.org/wiki/SOLID)
- [SOLID: The First 5 Principles of Object Oriented Design — DigitalOcean](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

## Objetivo

Este repositório é um espaço de estudo pessoal. O foco é entender cada princípio na prática, comparando código que viola a regra com código que a respeita — sempre em TypeScript.

---
