'use client';

import Head from 'next/head'
import styles from '@/styles/Contato.module.css'
import { useState } from 'react'

export default function Contato() {
  const [status, setStatus] = useState(null)

  function onSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    // Simples validação no cliente
    if (!data.nome || !data.email || !data.mensagem) {
      setStatus('Preencha todos os campos.')
      return
    }
    setStatus('Formulário enviado! (simulado)')
    e.currentTarget.reset()
  }

  return (
    <>
      <Head>
        <title>Contato — ThaiCamp</title>
      </Head>
      <main className="section">
        <div className="container">
          <h1 className="h2">Fale com a gente</h1>
          <p className="lead">Tire dúvidas ou agende sua aula experimental.</p>
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
            {status && <p style={{marginTop:10}}>{status}</p>}
          </form>
        </div>
      </main>
    </>
  )
}
