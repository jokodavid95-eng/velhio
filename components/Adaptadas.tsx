'use client'
import { useReveal } from './useReveal'
import styles from './Adaptadas.module.css'

const CARDS = [
  {
    icon: '🩺',
    title: 'Para diabéticos',
    desc: 'Nuestra tarta clásica elaborada con eritritol, sin renunciar a nada de cremosidad ni sabor. Igual de irresistible.',
    prices: '10€ · 28€ · 35€',
    note: '⏱ Con 48h de antelación mínima',
  },
  {
    icon: '🥛',
    title: 'Sin lactosa',
    desc: 'Intolerante a la lactosa no significa privarte de nada. Nuestra versión clásica sin lactosa, con el mismo resultado cremoso.',
    prices: '10€ · 28€ · 35€',
    note: '⏱ Con 48h de antelación mínima',
  },
]

export default function Adaptadas() {
  const ref = useReveal()
  return (
    <section id="adaptadas" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <span className={`section-label reveal`}>Para todos</span>
        <h2 className={`section-title reveal rd1`}>
          Tartas <em>adaptadas</em>
        </h2>
        <div className={styles.grid}>
          {CARDS.map((c, i) => (
            <div key={c.title} className={`${styles.card} reveal rd${i + 1}`}>
              <span className={styles.icon}>{c.icon}</span>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
              <div className={styles.cardPrices}>{c.prices}</div>
              <div className={styles.cardNote}>{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
