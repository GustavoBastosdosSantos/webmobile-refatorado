# ThaiCamp — Refatoração para Next.js (React)

> **Objetivo:** migrar o site do Projeto 1 para **React** usando **Next.js**, com interface componentizada, rotas, CSS organizado e tutorial de execução. Este README foi escrito para alguém **leigo** conseguir rodar e entender o projeto.

---

## 1) O que é React? Por que mudamos?

**React** é uma biblioteca JavaScript para criar interfaces de usuário. Em vez de montar páginas inteiras de uma vez, a gente **divide a tela em peças menores** chamadas **componentes** (ex.: Cabeçalho, Banner, Cartões de Benefícios, Planos).  
Vantagens práticas:

- **Reuso:** um mesmo componente pode ser usado em várias páginas.
- **Manutenção:** alterar um componente atualiza todos os lugares em que ele aparece.
- **Estado:** podemos controlar interações (ex.: abrir/fechar, mensagens) com `useState`.
- **Performance:** React atualiza só o necessário na tela, não tudo de novo.

**Next.js** é um framework em cima do React que facilita rotas, otimiza imagens e oferece uma estrutura de pastas simples.  
Por que **Next.js**?

- **Rotas automáticas:** arquivos dentro de `pages/` viram URLs (ex.: `pages/contato.js` → `/contato`).
- **Otimização de imagens:** `<Image />` melhora carregamento.
- **Pronto para produção:** fácil de hospedar (ex.: Vercel).

> O enunciado do projeto pede: componentização com React + Next.js, rotas simples/dinâmicas e — na parte 3 — consumo de API com `useEffect`. Também orienta usar **CSS Global + CSS Modules** (sem Tailwind) e escrever um **README em formato de tutorial**.

---

## 2) Como rodar (passo a passo leigo)

### Pré-requisitos
- **Node.js** LTS instalado (teste no terminal: `node -v` e `npm -v`).

### Instalar e iniciar
```bash
# dentro da pasta do projeto (a que contém package.json)
npm install
npm run dev
```
Abra **http://localhost:3000** no navegador.

Se a porta 3000 estiver ocupada:
```bash
npm run dev -- -p 5173
# acesse http://localhost:5173
```

> Se o PowerShell bloquear scripts do npm, rode **como administrador**:
> ```powershell
> Set-ExecutionPolicy RemoteSigned
> ```
> depois feche e abra o terminal novamente.

---

## 3) Estrutura de pastas

```
pages/
  _app.js          # Carrega o CSS global e rende as páginas
  index.js         # Home
  contato.js       # Página de contato (exemplo de formulário)
components/
  Header.jsx
  Hero.jsx
  FeatureCards.jsx
  Plans.jsx
  Footer.jsx
styles/
  globals.css
  Header.module.css
  Hero.module.css
  Plans.module.css
  Contato.module.css
public/
  img/             # Imagens estáticas (acessadas via /img/arquivo.png)
package.json
next.config.mjs
README.md
```

---

## 4) Guia de componentes e funções (o que cada peça faz)

### `pages/_app.js`
- **O que é:** “casca” da aplicação. O Next chama esse arquivo para renderizar qualquer página.
- **O que faz:** importa `globals.css` uma única vez e renderiza a página atual com suas propriedades.
```jsx
import '../styles/globals.css'     // CSS global (tokens, reset leve)
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />   // Renderiza a página ativa
}
```

### `components/Header.jsx`
- **O que é:** cabeçalho fixo com logo e navegação.
- **Funções:** organiza links, melhora acessibilidade com `aria-label` no `<nav>`.
- **CSS:** `Header.module.css` (escopo local, não “vaza” estilo).

### `components/Hero.jsx`
- **O que é:** seção de destaque da home (título, texto, call to action e imagem).
- **Destaques técnicos:**
  - Layout *grid* responsivo.
  - Botão principal (classe global `.btn`) e botão secundário (“fantasma”).
  - `<Image src="/img/...">` usa imagem de `public/img`.
- **CSS:** `Hero.module.css`.

### `components/FeatureCards.jsx`
- **O que é:** lista de benefícios/recursos.
- **Como funciona:** um **array de objetos** (`title`/`text`) é mapeado para `<article>`s.
- **Por que é legal pra React:** trocar/ordenar/duplicar cards exige só mexer no array.
```jsx
const items = [{ title:'Condicionamento', text:'...' }, ...]
{items.map((it) => (
  <article key={it.title} className="card">
    <h3>{it.title}</h3>
    <p>{it.text}</p>
  </article>
))}
```

### `components/Plans.jsx`
- **O que é:** grade com planos (nome, preço, benefícios).
- **Como funciona:** recebe um array `plans` e cria cartões visualmente consistentes.
- **CSS:** `Plans.module.css` (grid responsiva).
- **Extensível:** dá para integrar com API depois (Parte 3) trocando o array por dados externos.

### `components/Footer.jsx`
- **O que é:** rodapé simples e responsivo.
- **Detalhes:** ano atual automático com `new Date().getFullYear()`.

### `pages/index.js` (Home)
- **O que é:** compõe a página inicial usando os componentes acima.
- **Inclui:** `<Head>` (SEO básico) + `Header` + `Hero` + `FeatureCards` + `Plans` + `Footer`.

### `pages/contato.js` (Formulário de contato)
- **O que é:** página com formulário didático.
- **Estado (React):** usa `useState` para exibir o status (“enviado”, “preencha tudo”, etc.).
- **Validação simples no cliente:** garante que nome/email/mensagem não fiquem vazios.
- **Ponto de evolução:** na Parte 3, podemos trocar o “simulado” por **fetch** para uma API real.
```jsx
import { useState } from 'react'
const [status, setStatus] = useState(null)

function onSubmit(e) {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.currentTarget).entries())
  if (!data.nome || !data.email || !data.mensagem) {
    setStatus('Preencha todos os campos.')
    return
  }
  setStatus('Formulário enviado! (simulado)')
  e.currentTarget.reset()
}
```

---

## 5) Estilos (CSS) — por que Global + Modules?

O projeto usa:
- `styles/globals.css` para **tokens** (cores, sombras, espaçamentos), reset leve e utilitários (ex.: `.container`, `.section`, `.btn`, `.card`).
- `*.module.css` por componente para **escopo local** (não conflita nomes, não afeta outros componentes).
- **Sem Tailwind/CSS-in-JS**, conforme o guia didático.

Benefícios:
- Organização clara.
- Zero poluição global além do necessário.
- Facilidade de manutenção e leitura por iniciantes.

---

## 6) Rotas: simples agora, dinâmicas depois

- **Rota simples:** cada arquivo em `pages/` vira uma URL.  
  `pages/contato.js` → `/contato`.
- **Rotas dinâmicas (Parte 2)**: criar algo como `pages/aulas/[id].js` para `/aulas/10`.  
- **API (Parte 3)**: criar endpoints em `pages/api/*` e consumir no cliente com `useEffect`.

---

## 7) Por que a migração (pontos para apresentação)

- **Componentização:** evita repetição de HTML, mantém padrão visual e reduz bugs.
- **Escalabilidade:** novas seções = novos componentes reaproveitando tokens de estilo.
- **Performance:** renderização reativa (altera só o que mudou).
- **Produtividade:** rotas automáticas, imagem otimizada, build pronto para deploy.
- **Manutenção futura:** fácil de integrar API, rotas dinâmicas e formulários reais (Partes 2 e 3).

---

## 8) Extensão (caráter extensionista)

O site propõe impactar pessoas reais (ex.: comunidade interessada em condicionamento físico e Muay Thai). O conteúdo foi pensado para **acolher iniciantes** (texto claro, CTA de aula experimental) e também o público avançado (planos e benefícios). Esse alinhamento com **propósito real** é o caráter extensionista esperado.

---

## 9) Como contribuir (time / apresentação)

- Mantenha os componentes pequenos e focados (cada um faz uma coisa).
- Use nomes claros para variáveis/props.
- Comente trechos que possam confundir iniciantes.
- Traga imagens para `public/img`.
- Em cada check-in, expliquem o que foi feito, mostrem os arquivos e o porquê das escolhas (demonstração + tutorial).

---

## 10) Deploy (opcional)

- **Vercel** (mais simples): importar o repositório do GitHub, dar **Deploy**.  
- Após publicar, coloque o link do deploy no README.

---

## 11) Roadmap para as próximas Partes

**Parte 2 (100% migrado, sem API):**
- Migrar todas as seções remanescentes do site antigo.
- Criar **1 rota simples** (`/sobre`) e **1 rota dinâmica** (ex. `/aulas/[id]` lendo de um `data/aulas.js`).
- Garantir que não ficou **código legado** (HTML duplicado sem componente).

**Parte 3 (API + useEffect no cliente):**
- Criar `pages/api/planos.js` retornando JSON.
- No componente `Plans`, trocar o array local por:
  ```jsx
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/planos')
      .then(r => r.json())
      .then(setPlans)
      .catch(() => setError('Falha ao carregar'))
      .finally(() => setLoading(false))
  }, [])
  ```
- Exibir estados: `Carregando...` / erro / lista final.

---

## 12) Aprendizados (para o PDF final)

- Como **componentizar** páginas grandes em pedaços reutilizáveis.
- Como **organizar CSS** em Global + Modules para iniciantes.
- Diferença entre **rotas simples** e **dinâmicas** no Next.
- Como **manter estado** (`useState`) e, na Parte 3, **carregar dados** com `useEffect`.
- Boas práticas de **acessibilidade** (nav com `aria-label`, contraste, responsividade).

---

## 13) Comandos úteis

```bash
npm run dev     # ambiente de desenvolvimento
npm run build   # build de produção
npm start       # servir build em produção (http://localhost:3000)
```
