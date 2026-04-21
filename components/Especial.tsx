'use client'
import { useReveal } from './useReveal'
import styles from './Especial.module.css'

export default function Especial() {
  const ref = useReveal()
  return (
    <section id="especial" className={styles.section} ref={ref}>
      <div className={styles.watermark}>OCTUBRE</div>
      <div className={styles.inner}>
        <span className={`${styles.month} reveal`}>✦ Tarta del mes · Octubre ✦</span>
        <h2 className={`${styles.title} reveal rd1`}>
          Tarta de Queso<br />y <em>Donut</em>
        </h2>
        <p className={`${styles.sub} reveal rd2`}>
          Un sabor nuevo, solo por tiempo limitado
        </p>
        <div className={`${styles.prices} reveal rd3`}>
          {[
            { size: 'Pequeña', val: '11€' },
            { size: 'Mediana', val: '33€' },
            { size: 'Grande',  val: '40€' },
          ].map(p => (
            <div key={p.size} className={styles.price}>
              <div className={styles.pSize}>{p.size}</div>
              <div className={styles.pVal}>{p.val}</div>
            </div>
          ))}
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20la%20tarta%20del%20mes"
          className={`btn-gold reveal rd4`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedir antes de que se acabe
        </a>
      </div>
    </section>
  )
}
