import styles from '@/styles/Plans.module.css'

export default function Plans() {
  const plans = [
    { name: 'Essencial', price: 'R$ 249/mês', benefits: ['2x por semana', 'Acesso em horário de aula', 'Suporte do treinador'] },
    { name: 'Performance', price: 'R$ 299/mês', benefits: ['3x por semana', 'Acesso em horário de aula', 'Plano de evolução'] },
    { name: 'Ilimitado', price: 'R$ 349/mês', benefits: ['Aulas ilimitadas', 'Acesso livre nos horários', 'Acompanhamento próximo'] }
  ]
  return (
    <section id="planos" className="section">
      <div className="container">
        <h2 className="h2">Planos</h2>
        <div className={styles.grid}>
          {plans.map((p)=> (
            <div key={p.name} className={styles.card}>
              <div>
                <h3 className="h3">{p.name}</h3>
                <p className={styles.price}>{p.price}</p>
              </div>
              <ul className={styles.list}>
                {p.benefits.map(b => <li key={b}>{b}</li>)}
              </ul>
              <a href="/contato" className="btn">Matricular</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
