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
            src="/historia2.jpg"
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
            Nacidos en <em>Uruguay</em>,<br />criados en Madrid
          </h2>
          <p className={styles.body}>
            Una receta que nació en la antigua Grecia, sobrevivió siglos cruzando el Mediterráneo y el Atlántico, y llegó a nuestras manos en Uruguay. Hoy la elaboramos a mano en Ciempozuelos, con la misma paciencia y los mismos ingredientes de siempre.
          </p>
          
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