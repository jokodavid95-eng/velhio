'use client'
import { useReveal } from './useReveal'
import styles from './Carta.module.css'

const TARTAS = [
  { name: 'Clásica',              note: 'La original, siempre perfecta',        P: '10€', M: '25€', G: '30€' },
  { name: 'Nutella',              note: 'Irresistible chocolate avellana',       P: '10€', M: '28€', G: '35€' },
  { name: 'Lotus',                note: 'Galleta caramelizada y especiada',      P: '10€', M: '28€', G: '35€' },
  { name: 'Oreo',                 note: 'El clásico reinventado',                P: '10€', M: '28€', G: '35€' },
  { name: 'Dulce de Leche',       note: 'El sabor de Uruguay en cada bocado',    P: '10€', M: '28€', G: '35€' },
  { name: 'Café',                 note: 'Para los amantes del espresso',         P: '10€', M: '28€', G: '35€' },
  { name: 'Pantera Rosa',         note: 'Rosa, dulce y sorprendente',            P: '10€', M: '30€', G: '37€' },
  { name: 'Pistacho',             note: 'Pistachos sicilianos tostados',         P: '10€', M: '30€', G: '40€' },
  { name: 'Chocolate Belga',      note: 'Intensidad y cremosidad premium',       P: '10€', M: '30€', G: '40€' },
  { name: 'Mango y Choc. Blanco', note: 'Tropical y elegante',                  P: '10€', M: '28€', G: '35€' },
  { name: 'Happy Hippo',          note: 'La favorita de los que saben',          P: '10€', M: '28€', G: '35€' },
  { name: '🍩 Tarta del Mes',     note: 'Octubre · Queso y Donut',              P: '11€', M: '33€', G: '40€', special: true },
]

const PORCIONES = [
  { name: 'Porción Clásica',   sub: 'Individual',       price: '5€' },
  { name: 'Porción Sabores',   sub: 'Todos los sabores', price: '5,5€' },
  { name: 'Porción Especial',  sub: 'Tarta del mes',    price: '6€' },
]

export default function Carta() {
  const ref = useReveal()
  return (
    <section id="carta" className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <div>
          <span className="section-label">Todos los sabores</span>
          <h2 className="section-title">Carta <em>completa</em></h2>
        </div>
        <p className={styles.headerNote}>P = Pequeña &nbsp;·&nbsp; M = Mediana &nbsp;·&nbsp; G = Grande</p>
      </div>

      <div className={`${styles.grid} reveal`}>
        {TARTAS.map(t => (
          <div key={t.name} className={`${styles.item} ${t.special ? styles.special : ''}`}>
            <div>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.note}>{t.note}</div>
            </div>
            <div className={styles.prices}>
              {(['P', 'M', 'G'] as const).map(s => (
                <div key={s} className={styles.priceCol}>
                  <div className={styles.pSize}>{s}</div>
                  <div className={styles.pVal}>{t[s]}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.porciones} reveal`}>
        {PORCIONES.map(p => (
          <div key={p.name} className={styles.porcionItem}>
            <div>
              <div className={styles.porcionName}>{p.name}</div>
              <div className={styles.porcionSub}>{p.sub}</div>
            </div>
            <div className={styles.porcionPrice}>{p.price}</div>
          </div>
        ))}
      </div>

      {/* Pack band */}
      <div className={`${styles.pack} reveal`}>
        <div className={styles.packText}>
          <h3>Pack Degustación</h3>
          <p>3 tartas pequeñas a elegir · +1€ incluyendo especial del mes</p>
        </div>
        <div className={styles.packPrice}>28€</div>
        <a
          href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20el%20pack%20degustaci%C3%B3n"
          className={styles.packCta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedir pack
        </a>
      </div>
    </section>
  )
}
