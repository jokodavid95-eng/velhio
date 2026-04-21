import styles from './Marquee.module.css'

const ITEMS = [
  'Tartas artesanales',
  'Hechas a mano',
  'Una cucharada y no hay vuelta atrás',
  'Receta familiar desde Uruguay',
  'Madrid · Ciempozuelos',
  'Muy muy cremosas',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={styles.band}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}<span className={styles.dot}> ✦ </span>
          </span>
        ))}
      </div>
    </div>
  )
}