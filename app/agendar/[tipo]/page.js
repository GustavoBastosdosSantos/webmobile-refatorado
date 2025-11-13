import Link from 'next/link'

export default function AgendarPage({ params }) {
  const { tipo } = params

  const label =
    tipo === 'experimental'
      ? 'aula experimental'
      : tipo.replace(/-/g, ' ')

  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Agendar {label}</h1>
        <p className="lead">
          Você escolheu uma <strong>{label}</strong> no ThaiCamp.
        </p>

        <p style={{ marginBottom: 16 }}>
          Para finalizar, preencha o formulário de contato.
        </p>

        <Link href="/contato" className="btn">
          Ir para o formulário
        </Link>
      </div>
    </main>
  )
}