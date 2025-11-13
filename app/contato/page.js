'use client'

import styles from '@/styles/Contato.module.css'
import { useState, useEffect } from 'react'

export default function Contato() {
  const [status, setStatus] = useState(null)
  const [temperatura, setTemperatura] = useState(null)
  const [erroClima, setErroClima] = useState(false)

  useEffect(() => {
    async function buscarClima() {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true'
        )

        const data = await res.json()
        console.log('Resposta da API de clima:', data) // só pra conferir

        const tempAtual = data?.current_weather?.temperature
        if (typeof tempAtual === 'number') {
          setTemperatura(tempAtual)
        } else {
          setErroClima(true)
        }
      } catch (e) {
        console.error('Erro API clima:', e)
        setErroClima(true)
      }
    }

    buscarClima()
  }, [])

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

  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Fale com a gente</h1>
        <p className="lead">Tire dúvidas ou agende sua aula experimental.</p>

        {/* BLOCO DO CLIMA */}
        {temperatura !== null && !erroClima && (
          <p style={{ marginBottom: 16 }}>
            Hoje faz <strong>{Math.round(temperatura)}°C</strong> — clima perfeito pra sua aula experimental. 🥊
          </p>
        )}

        {temperatura === null && !erroClima && (
          <p style={{ marginBottom: 16, fontSize: 14, opacity: 0.8 }}>
            Carregando clima de hoje...
          </p>
        )}

        {erroClima && (
          <p style={{ marginBottom: 16, fontSize: 14, opacity: 0.8 }}>
            Não conseguimos carregar o clima agora, mas a aula continua pegando fogo. 🔥
          </p>
        )}

        {/* FORMULÁRIO */}
        <form className={styles.form} onSubmit={onSubmit}>
          <label className={styles.label}>
            <span>Nome</span>
            <input className={styles.input} type="text" name="nome" required />
          </label>
          <label className={styles.label}>
            <span>E-mail</span>
            <input className={styles.input} type="email" name="email" required />
          </label>
          <label className={styles.label}>
            <span>Mensagem</span>
            <textarea className={styles.textarea} name="mensagem" required />
          </label>
          <button className="btn" type="submit">Enviar</button>
          {status && <p style={{ marginTop: 10 }}>{status}</p>}
        </form>
      </div>
    </main>
  )
}