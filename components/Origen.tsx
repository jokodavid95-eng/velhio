'use client'
import { useReveal } from './useReveal'
import styles from './Origen.module.css'

const AthleteGreek = () => (
  <svg viewBox="0 0 200 380" xmlns="http://www.w3.org/2000/svg" className={styles.athleteSvg}>
    {/* Figure in classic Greek vase painting style — silhouette */}
    {/* Head */}
    <circle cx="100" cy="42" r="22" fill="#1B3A5C" opacity="0.85"/>
    {/* Helmet crest */}
    <path d="M88,22 Q100,5 112,22 Q108,18 100,20 Q92,18 88,22Z" fill="#C8941E" opacity="0.9"/>
    <rect x="96" y="18" width="8" height="6" fill="#C8941E" opacity="0.8"/>
    {/* Body — tunic */}
    <path d="M80,64 Q100,58 120,64 L128,140 Q100,148 72,140 Z" fill="#1B3A5C" opacity="0.8"/>
    {/* Belt */}
    <rect x="76" y="118" width="48" height="6" rx="2" fill="#C8941E" opacity="0.7"/>
    {/* Left arm extended forward — discus thrower pose */}
    <path d="M80,75 Q55,68 35,55" stroke="#1B3A5C" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.85"/>
    {/* Right arm back */}
    <path d="M118,80 Q145,72 160,85" stroke="#1B3A5C" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.85"/>
    {/* Discus in right hand */}
    <ellipse cx="162" cy="83" rx="12" ry="7" fill="#C8941E" opacity="0.8" transform="rotate(-20 162 83)"/>
    {/* Left leg */}
    <path d="M88,140 Q82,190 78,240 Q76,260 80,270" stroke="#1B3A5C" strokeWidth="13" strokeLinecap="round" fill="none" opacity="0.85"/>
    {/* Left foot */}
    <ellipse cx="78" cy="272" rx="14" ry="6" fill="#1B3A5C" opacity="0.8"/>
    {/* Right leg — stepping forward */}
    <path d="M112,140 Q118,185 124,230 Q128,255 126,268" stroke="#1B3A5C" strokeWidth="13" strokeLinecap="round" fill="none" opacity="0.85"/>
    {/* Right foot */}
    <ellipse cx="125" cy="270" rx="14" ry="6" fill="#1B3A5C" opacity="0.8"/>
    {/* Ground line */}
    <line x1="20" y1="278" x2="180" y2="278" stroke="#1B3A5C" strokeWidth="2" opacity="0.3"/>
    {/* Decorative meander border on vase */}
    <rect x="10" y="285" width="180" height="1.5" fill="#C8941E" opacity="0.4"/>
    {/* Stars */}
    {[[20,100],[175,130],[15,200],[178,220]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="2" fill="#C8941E" opacity="0.35"/>
    ))}
  </svg>
)

export default function Origen() {
  const ref = useReveal()
  return (
    <section id="origen" className={styles.section} ref={ref}>
      {/* Animated meander top */}
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
            En la isla de Samos, frente a las costas de la antigua Jonia, <strong>Hera</strong> — diosa del Olimpo, patrona de la isla — era honrada con ofrendas en el gran templo de 155 columnas. Entre esas ofrendas, una preparación cremosa de queso fresco, miel y trigo: el primer <em>plakous</em>, la primera tarta de queso de la historia.
          </p>
          <p className={styles.body}>
            Siglos después, esa receta viajó por el Mediterráneo, cruzó el Atlántico y llegó a Uruguay, donde una familia la heredó, la perfeccionó y la trajo a Madrid.
          </p>
          <p className={styles.body}>
            Hoy, en Ciempozuelos, Velhio la elabora a mano — igual que entonces.
          </p>
        </div>

        <div className={`${styles.visual} reveal rd2`}>
          {/* Greek athlete figure */}
          <div className={styles.athleteWrap}>
            <AthleteGreek />
            <div className={styles.athleteLabel}>
              <span>Discóbolo · Antigua Grecia</span>
              <span>Estilo ánfora ática · V a.C.</span>
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

      {/* Animated meander bottom */}
      <div className={styles.meander} />
    </section>
  )
}
