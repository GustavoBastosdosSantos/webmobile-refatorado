import Image from 'next/image'
import styles from '@/styles/Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h1 className="h1">Evolua com o Muay Thai</h1>
            <p className="lead">Condicionamento físico, foco mental e uma comunidade para crescer junto. Treinos para iniciantes e avançados.</p>
            <div className={styles.actions}>
              <Link href="/contato" className="btn">Agendar aula experimental</Link>
              <a href="#planos" className={styles.ghost}>Ver planos</a>
            </div>
          </div>
          <div className={styles.heroImgWrap}>
            <Image src="/img/0aa41ed8-006a-47dc-a5d9-5f49f11c90d5.jpg" alt="Treino Muay Thai" width={760} height={520} className={styles.heroImg} />
          </div>
        </div>
      </div>
    </section>
  )
}
