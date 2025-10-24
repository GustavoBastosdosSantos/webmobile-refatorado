export default function FeatureCards() {
  const items = [
    {
      title: 'Condicionamento Físico',
      text: 'Aprimore força, resistência e mobilidade com treinos completos e progressivos.'
    },
    {
      title: 'Disciplina e Foco',
      text: 'Treinos que melhoram sua concentração e constância — dentro e fora do tatame.'
    },
    {
      title: 'Comunidade Forte',
      text: 'Cresça com quem busca o mesmo objetivo que você: saúde, performance e evolução.'
    },
  ]
  return (
    <section id="beneficios" className="section">
      <div className="container">
        <h2 className="h2">Por que treinar com a gente?</h2>
        <div className="grid grid-3" style={{marginTop: 12}}>
          {items.map((it) => (
            <article key={it.title} className="card">
              <h3 className="h3">{it.title}</h3>
              <p style={{margin: 0}}>{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
