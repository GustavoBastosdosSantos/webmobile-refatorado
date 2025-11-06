import Link from 'next/link';

export const metadata = {
  title: 'Benefícios do Treino | Thaicamp',
  description: 'Benefícios do Muay Thai e treinos de alta intensidade, com referências científicas.',
};

const benefits = [
  {
    title: 'Pressão arterial e saúde do coração',
    text: 'Em adultos mais velhos, 12 semanas de Muay Thai reduziram a pressão arterial diastólica em relação ao treino funcional, sugerindo efeito cardioprotetor.',
    refs: [
      { label: 'Saraiva et al., 2024 (RCT)', href: 'https://pubmed.ncbi.nlm.nih.gov/39153977/' }
    ]
  },
  {
    title: 'Condicionamento e VO₂máx',
    text: 'Semanas de kickboxing elevam significativamente a aptidão cardiorrespiratória (VO₂máx), um forte preditor de longevidade.',
    refs: [
      { label: 'Ouergui et al., 2014', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4187584/' },
    ]
  },
  {
    title: 'Densidade óssea',
    text: 'Esportes de combate estão associados a maior massa mineral óssea em diferentes idades — impacto positivo para proteção contra osteopenia/osteoporose.',
    refs: [
      { label: 'Barbeta et al., 2019 (revisão)', href: 'https://www.scielo.br/j/rbme/a/PfhFXdFJdYg6GTqbrqGTybM/' },
      { label: 'Nasri et al., 2015', href: 'https://pubmed.ncbi.nlm.nih.gov/24176431/' },
    ]
  },
  {
    title: 'Funções cognitivas',
    text: 'Protocolos de HIIT — base comum no Muay Thai — mostram melhora de funções executivas (memória de trabalho, atenção, flexibilidade cognitiva).',
    refs: [
      { label: 'Liu et al., 2024', href: 'https://www.nature.com/articles/s41598-024-83802-9' },
    ]
  },
  {
    title: 'Bem-estar e autoeficácia',
    text: 'Intervenções baseadas em artes marciais podem elevar a autoeficácia e aspectos de saúde mental, especialmente em programas estruturados.',
    refs: [
      { label: 'Moore et al., 2023', href: 'https://www.mdpi.com/2409-9287/8/3/43' },
    ]
  },
  {
    title: 'Composição corporal & qualidade do sono',
    text: 'Cardio kickboxing tem efeitos positivos em composição corporal, resistência cardiorrespiratória, qualidade de vida e sono em estudantes.',
    refs: [
      { label: 'Estudo em estudantes (2020)', href: 'https://www.researchgate.net/publication/354523044_The_Effect_of_8_Weeks_of_Cardio_Kickboxing_Exercises_on_Cardiorespiratory_Endurance_Body_Composition_Quality_of_Life_and_Sleep_Quality_of_Male_Students_Living_in_Dormitories' }
    ]
  }
];

export default function BeneficiosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{paddingTop: 72}}>
        <div className="container">
          <h1 className="h1">Benefícios do Muay Thai (com ciência)</h1>
          <p className="lead">
            O Muay Thai combina treino técnico com sessões em alta intensidade (HIIT), gerando ganhos cardiorrespiratórios,
            ósseos, cognitivos e de bem-estar. Abaixo, um resumo com referências científicas recentes.
          </p>
          <div className="actions" style={{marginTop: 18}}>
            <Link href="/contato" className="btn">Quero experimentar</Link>
            <a
              href="#referencias"
              style={{display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'12px 18px',borderRadius:8,border:'1px solid rgba(0,0,0,.12)',background:'#fff',color:'var(--text)',fontWeight:600}}
            >
              Ver referências
            </a>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="section" style={{paddingTop: 0}}>
        <div className="container">
          <div className="grid grid-3">
            {benefits.map((b) => (
              <article key={b.title} className="card">
                <h3 className="h3" style={{marginBottom: 8}}>{b.title}</h3>
                <p style={{margin: 0}}>{b.text}</p>
                <ul style={{marginTop: 10, paddingLeft: 18}}>
                  {b.refs.map((r) => (
                    <li key={r.href}><a href={r.href} target="_blank" rel="noopener noreferrer">{r.label}</a></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ curto */}
      <section className="section" style={{paddingTop: 0}}>
        <div className="container">
          <h2 className="h2">Perguntas rápidas</h2>
          <div className="grid" style={{gap: 16}}>
            <details className="card">
              <summary className="h3">Quantas vezes por semana?</summary>
              <p style={{marginTop: 8}}>2–3x por semana já geram adaptações importantes em 8–12 semanas, conforme os estudos listados.</p>
            </details>
            <details className="card">
              <summary className="h3">Serve para iniciantes?</summary>
              <p style={{marginTop: 8}}>Sim. As aulas são graduais e a carga é adaptada ao condicionamento e objetivos.</p>
            </details>
            <details className="card">
              <summary className="h3">Preciso de exame médico?</summary>
              <p style={{marginTop: 8}}>Se você tem histórico de condições cardiovasculares, consulte seu médico antes de iniciar atividades intensas.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Referências */}
      <section id="referencias" className="section" style={{paddingTop: 0}}>
        <div className="container">
          <h2 className="h2">Referências científicas</h2>
          <ol style={{paddingLeft: 18, marginTop: 8}}>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/39153977/" target="_blank" rel="noopener noreferrer">Saraiva BTC et al. 2024. Muay Thai e pressão arterial em idosos (ensaio clínico).</a></li>
            <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4187584/" target="_blank" rel="noopener noreferrer">Ouergui I et al. 2014. Kickboxing e VO₂máx.</a></li>
            <li><a href="https://www.scielo.br/j/rbme/a/PfhFXdFJdYg6GTqbrqGTybM/" target="_blank" rel="noopener noreferrer">Barbeta CJO et al. 2019. Revisão sobre esportes de combate e massa óssea.</a></li>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/24176431/" target="_blank" rel="noopener noreferrer">Nasri R et al. 2015. Esportes de combate e densidade mineral óssea.</a></li>
            <li><a href="https://www.nature.com/articles/s41598-024-83802-9" target="_blank" rel="noopener noreferrer">Liu K et al. 2024. HIIT e funções cognitivas.</a></li>
            <li><a href="https://www.mdpi.com/2409-9287/8/3/43" target="_blank" rel="noopener noreferrer">Moore B et al. 2023. Artes marciais e autoeficácia.</a></li>
            <li><a href="https://www.researchgate.net/publication/354523044_The_Effect_of_8_Weeks_of_Cardio_Kickboxing_Exercises_on_Cardiorespiratory_Endurance_Body_Composition_Quality_of_Life_and_Sleep_Quality_of_Male_Students_Living_in_Dormitories" target="_blank" rel="noopener noreferrer">Estudo (2020). Cardio kickboxing: composição corporal, qualidade de vida e sono.</a></li>
          </ol>
          <p className="lead" style={{marginTop: 12}}>Observação: resultados variam por pessoa; alguns achados são preliminares e requerem mais estudos.</p>
        </div>
      </section>

      {/* CTA final */}
      <section className="section" style={{paddingTop: 0}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="h2">Bora treinar?</h2>
          <p className="lead">Agende uma aula experimental para sentir na prática.</p>
          <Link href="/contato" className="btn">Agendar agora</Link>
        </div>
      </section>
    </main>
  );
}