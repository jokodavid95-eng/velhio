'use client'
import Image from 'next/image'
import { useReveal } from './useReveal'
import styles from './Historia.module.css'

export default function Historia() {
  const ref = useReveal()
  return (
    <section id="historia" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.imgWrap} reveal`}>
          <Image
          src="/historia.jpg"
            alt="Tarta de queso Velhio recién horneada"
            width={800}
            height={1000}
            className={styles.img}
            priority
          />
          <div className={styles.badge}>
            Desde<br />Uruguay<br />con ♥
          </div>
        </div>

        <div className={`${styles.text} reveal rd2`}>
          <span className="section-label">Nuestra historia</span>
          <h2 className="section-title">
            Un oficio que se<br /><em>hornea en familia</em>
          </h2>
          <p className={styles.body}>
            Nacimos en Uruguay, crecimos en Madrid y heredamos una receta
            que solo mejora con el tiempo. Cada tarta se hace a mano, con
            paciencia, con historia y con ese punto cremoso que convierte
            cada bocado en un recuerdo.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20una%20tarta"
            className="btn-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir ahora por WhatsApp
          </a>
          <div className={styles.stats}>
            <div><div className={styles.num}>100%</div><div className={styles.lbl}>Artesanal</div></div>
            <div><div className={styles.num}>11+</div><div className={styles.lbl}>Sabores</div></div>
            <div><div className={styles.num}>★ 5</div><div className={styles.lbl}>Valoración</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
