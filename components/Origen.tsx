'use client'
import { useReveal } from './useReveal'
import styles from './Origen.module.css'

export default function Origen() {
  const ref = useReveal()
  return (
    <section id="origen" className={styles.section} ref={ref}>
      <div className={styles.meander} />

      <div className={styles.inner}>
        <div className={`${styles.textBlock} reveal`}>
          <span className="section-label">El origen · VIII a.C.</span>
          <h2 className="section-title">
            De <em>Samos</em> a<br />Montevideo
          </h2>
          <p className={styles.tagline}>
            Dos islas, dos culturas, una tradición que viaja siglos.
          </p>
          <p className={styles.body}>
            En la isla de Samos, frente a las costas de la antigua Jonia, <strong>Hera</strong> — diosa del Olimpo, patrona de la isla — era honrada con ofrendas en el gran templo de 155 columnas que los griegos construyeron en su honor. Entre esas ofrendas, una preparación cremosa de queso fresco, miel y trigo: el primer <em>plakous</em>, la primera tarta de queso de la historia.
          </p>
          <p className={styles.body}>
            Siglos después, esa misma receta viajó por el Mediterráneo, cruzó el Atlántico y llegó a Uruguay, donde una familia la heredó, la perfeccionó y la trajo a Madrid.
          </p>
          <p className={styles.body}>
            Hoy, en Ciempozuelos, Velhio la elabora a mano — igual que entonces.
          </p>
        </div>

        <div className={`${styles.visual} reveal rd2`}>
          {/* Column of Hera temple */}
          <div className={styles.columnWrap}>
            <svg viewBox="0 0 120 420" xmlns="http://www.w3.org/2000/svg" className={styles.columnSvg}>
              {/* Capital */}
              <rect x="10" y="20" width="100" height="8" rx="2" fill="#D4A843" opacity="0.8"/>
              <rect x="20" y="28" width="80" height="6" rx="1" fill="#D4A843" opacity="0.6"/>
              <ellipse cx="60" cy="38" rx="35" ry="6" fill="#D4A843" opacity="0.5"/>
              {/* Shaft */}
              <rect x="42" y="44" width="36" height="280" rx="3" fill="url(#colGrad)" />
              {/* Flutes */}
              {[48,54,60,66,72].map(x => (
                <line key={x} x1={x} y1="44" x2={x} y2="324" stroke="rgba(212,168,67,0.15)" strokeWidth="1"/>
              ))}
              {/* Base */}
              <ellipse cx="60" cy="330" rx="38" ry="7" fill="#D4A843" opacity="0.5"/>
              <rect x="22" y="337" width="76" height="8" rx="1" fill="#D4A843" opacity="0.6"/>
              <rect x="14" y="345" width="92" height="10" rx="2" fill="#D4A843" opacity="0.8"/>
              {/* Ground line */}
              <line x1="0" y1="360" x2="120" y2="360" stroke="rgba(212,168,67,0.3)" strokeWidth="1"/>
              {/* Stars/dots around */}
              {[[15,80],[105,120],[12,200],[108,250],[20,310]].map(([cx,cy],i) => (
                <circle key={i} cx={cx} cy={cy} r="2" fill="#D4A843" opacity="0.4"/>
              ))}
              <defs>
                <linearGradient id="colGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#D4A843" stopOpacity="0.15"/>
                  <stop offset="40%" stopColor="#F5EFE0" stopOpacity="0.9"/>
                  <stop offset="60%" stopColor="#FAF6EE" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#D4A843" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
            </svg>

            <div className={styles.columnLabel}>
              <span>Hereo de Samos</span>
              <span>Siglo VI a.C. · UNESCO</span>
            </div>
          </div>

          {/* Timeline */}
          <div className={styles.timeline}>
            {[
              { year: 'VIII a.C.', text: 'Primer plakous ofrendado a Hera en Samos' },
              { year: 'VI a.C.', text: 'El Heraion, templo de 155 columnas, Patrimonio UNESCO' },
              { year: 'Siglo XIX', text: 'La receta cruza el Atlántico hasta Uruguay' },
              { year: 'Hoy', text: 'Velhio la elabora a mano en Madrid' },
            ].map((item, i) => (
              <div key={i} className={`${styles.timelineItem} reveal rd${i+1}`}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineText}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.meander} />
    </section>
  )
}
