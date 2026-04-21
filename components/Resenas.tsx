'use client'
import { useReveal } from './useReveal'
import styles from './Resenas.module.css'

const REVIEWS = [
  {
    stars: 5,
    text: '"Lo encontramos por casualidad y nos encantó. El trato es majísimo y las tartas tienen buenísima calidad a un precio asequible que ya no se encuentra en muchos sitios."',
    author: 'Maria Benavente Quiles',
  },
  {
    stars: 5,
    text: '"Viajo por toda España y pruebo muchísimas tartas de queso. Estas se llevan la medalla de oro. De las mejores de España, enhorabuena y a seguir cumpliendo."',
    author: 'Frio frio · Guía Local',
  },
  {
    stars: 5,
    text: '"He probado la de pistacho, la normal y la de happy hippo. Super brutales todas, sobre todo la de happy hippo. Sin duda volveré a por más."',
    author: 'Adrian CabreraTortosa',
  },
]

export default function Resenas() {
  const ref = useReveal()
  return (
    <section id="resenas" className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className="section-label">Lo que dicen</span>
        <h2 className="section-title">Nuestros <em>clientes</em></h2>
      </div>

      <div className={styles.grid}>
        {REVIEWS.map((r, i) => (
          <div key={i} className={`${styles.card} reveal rd${i + 1}`}>
            <div className={styles.stars}>{'★'.repeat(r.stars)}</div>
            <p className={styles.text}>{r.text}</p>
            <div className={styles.author}>{r.author}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
