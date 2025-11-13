# ThaiCamp — Refatoração para Next.js (React)

## 1) O que é React? Por que mudamos?
React é uma biblioteca JavaScript para criar interfaces de usuário. Em vez de montar páginas inteiras, dividimos tudo em componentes reutilizáveis (Header, Hero, Cards etc).  
Next.js organiza rotas automaticamente, otimiza imagens e facilita deploy.

---

## 2) Como rodar o projeto
Pré-requisitos: Node.js instalado.  
Comandos:
npm install  
npm run dev  
Acesse: http://localhost:3000

---

## 3) Estrutura de Pastas
app/  
components/  
styles/  
public/  
package.json  
next.config.mjs

---

## 4) Componentes
Header.jsx: navegação  
Hero.jsx: destaque inicial  
FeatureCards.jsx: benefícios  
Plans.jsx: planos  
Footer.jsx: rodapé  

---

## 5) Estilos
globals.css → tokens e estilos gerais  
*.module.css → estilos por componente  

---

## 6) Rotas
Rotas simples → app/contato/page.js vira /contato  
Rotas dinâmicas → app/agendar/[tipo]/page.js  

---

## 7) Por que migramos
Componentização, organização, responsividade e escalabilidade simples.

---

## 8) Extensão
Site focado em impacto real: convite para aulas experimentais, responsivo e didático.

---

## 9) Como contribuir
Manter componentes pequenos, nomes claros e commits explicativos.

---

## 10) Deploy
Vercel (importar repositório e publicar).

---

## 11) Roadmap
Parte 2: rotas dinâmicas  
Parte 3: consumo de API externa

---

## 12) Aprendizados
Componentização, hooks, rotas, efeito, API e acessibilidade.

---

## 13) Comandos úteis
npm run dev  
npm run build  
npm start  

---

# 14) Rota dinâmica criada — /agendar/[tipo]

Para cumprir o requisito de rotas dinâmicas do Next.js, foi criada a rota:

/agendar/[tipo]

Estrutura:
app/agendar/[tipo]/page.js

Qualquer valor no lugar de [tipo] vira uma rota válida:
- /agendar/experimental
- /agendar/kids
- /agendar/muay-thai

O valor é acessado via params.tipo.

Código da página dinâmica:

import Link from 'next/link'
export default function AgendarPage({ params }) {
  const tipo = params.tipo
  const label = tipo === 'experimental' ? 'aula experimental' : tipo.replace(/-/g, ' ')
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Agendar {label}</h1>
        <p className="lead">Você escolheu uma {label} no ThaiCamp.</p>
        <p style={{ marginBottom: 16 }}>Para finalizar, preencha o formulário de contato.</p>
        <a href="/contato" className="btn">Ir para o formulário</a>
      </div>
    </main>
  )
}

Atualização da Home:
<Link href="/agendar/experimental" className="btn">Agendar aula experimental</Link>

Fluxo:
Home → /agendar/experimental → /contato

---

# 15) API Externa com useEffect — Open-Meteo

Requisito da Parte 3: consumir uma API real usando useEffect.

API usada:
https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true

Implementada em app/contato/page.js  
Exibe a temperatura de São Paulo no topo da página.

Lógica utilizada:

const [temperatura, setTemperatura] = useState(null)

useEffect(() => {
  async function buscarClima() {
    try {
      const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true")
      const data = await res.json()
      const temp = data?.current_weather?.temperature
      if (typeof temp === "number") {
        setTemperatura(temp)
      }
    } catch (e) {
      console.log("Erro ao carregar clima:", e)
    }
  }
  buscarClima()
}, [])

Renderização:
"Hoje faz X°C — clima perfeito pra sua aula experimental."

Requisitos atendidos:
useState, useEffect, fetch, API real e renderização dinâmica.

---

Arquivo gerado automaticamente.
