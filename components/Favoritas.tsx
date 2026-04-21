'use client'
import Image from 'next/image'
import { useReveal } from './useReveal'
import styles from './Favoritas.module.css'

const TARTAS = [
  {
    slug: 'clasica',
    badge: 'La clásica',
    name: 'Clásica',
    desc: 'La tarta que lo empezó todo. Cremosa, dorada, con base de galleta. Perfecta en cualquier ocasión.',
    img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700&q=85&fit=crop&crop=center',
    prices: { P: '10€', M: '25€', G: '30€' },
    wa: 'cl%C3%A1sica',
  },
  {
    slug: 'pistacho',
    badge: 'Top ventas',
    name: 'Pistacho',
    desc: 'Pistachos sicilianos tostados sobre nuestra crema base, coronados con pistachos triturados.',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=85&fit=crop&crop=top',
    prices: { P: '10€', M: '30€', G: '40€' },
    wa: 'pistacho',
  },
  {
    slug: 'lotus',
    badge: 'Favorita',
    name: 'Lotus',
    desc: 'La irresistible galleta Lotus en crema, fundida en nuestra base. Caramelo y especias en cada capa.',
    img: 'https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=700&q=85&fit=crop&crop=center',
    prices: { P: '10€', M: '28€', G: '35€' },
    wa: 'Lotus',
  },
]

export default function Favoritas() {
  const ref = useReveal()
  return (
    <section id="favoritas" className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className="section-label">Las más pedidas</span>
        <h2 className={`section-title ${styles.lightTitle}`}>
          Las <em>preferidas</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {TARTAS.map((t, i) => (
          <div key={t.slug} className={`${styles.card} reveal rd${i + 1}`}>
            <div className={styles.imgWrap}>
              <span className={styles.badge}>{t.badge}</span>
              <Image
                src={t.img}
                alt={`Tarta de queso ${t.name}`}
                width={700}
                height={500}
                className={styles.img}
              />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{t.name}</h3>
              <p className={styles.desc}>{t.desc}</p>
              <div className={styles.footer}>
                <div>
                  <div className={styles.priceLabel}>Desde</div>
                  <div className={styles.priceRow}>
                    {Object.entries(t.prices).map(([size, val]) => (
                      <div key={size} className={styles.priceItem}>
                        <div className={styles.priceSize}>{size}</div>
                        <div className={styles.priceVal}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href={`https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20la%20tarta%20de%20${t.wa}`}
                  className={styles.btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
