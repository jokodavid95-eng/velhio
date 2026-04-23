'use client'
import { useReveal } from './useReveal'
import styles from './Origen.module.css'

const AmphVase = () => (
  <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" className={styles.vaseScene}>
    <rect width="400" height="180" fill="#C8601A" rx="6"/>
    <rect x="0" y="0" width="400" height="18" fill="#A84E12"/>
    {[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390].map((x,i)=>(
      <rect key={i} x={x} y={i%2===0?2:6} width="8" height="8" fill="#8A3E0A" opacity="0.7"/>
    ))}
    <rect x="0" y="162" width="400" height="18" fill="#A84E12"/>
    {[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390].map((x,i)=>(
      <rect key={`b${i}`} x={x} y={i%2===0?164:168} width="8" height="8" fill="#8A3E0A" opacity="0.7"/>
    ))}
    <g transform="translate(30,30)">
      <ellipse cx="18" cy="52" rx="10" ry="18" fill="#1A1A18" transform="rotate(-10 18 52)"/>
      <circle cx="12" cy="32" r="10" fill="#1A1A18"/>
      <ellipse cx="8" cy="26" rx="5" ry="3" fill="#1A1A18"/>
      <path d="M14,68 Q8,85 2,98 Q4,105 10,100 Q14,90 18,78Z" fill="#1A1A18"/>
      <path d="M22,68 Q32,80 38,92 Q35,98 30,94 Q26,83 20,72Z" fill="#1A1A18"/>
      <path d="M10,45 Q2,52 -4,58 Q-6,54 -2,50 Q4,44 8,40Z" fill="#1A1A18"/>
      <path d="M24,42 Q32,36 38,32 Q40,36 37,39 Q30,42 26,46Z" fill="#1A1A18"/>
    </g>
    <g transform="translate(90,25)">
      <ellipse cx="18" cy="54" rx="10" ry="19" fill="#1A1A18" transform="rotate(-8 18 54)"/>
      <circle cx="14" cy="33" r="10" fill="#1A1A18"/>
      <ellipse cx="10" cy="27" rx="5" ry="3" fill="#1A1A18"/>
      <path d="M16,70 Q10,88 4,100 Q7,106 13,101 Q16,91 20,79Z" fill="#1A1A18"/>
      <path d="M20,70 Q30,82 36,94 Q33,100 28,96 Q24,85 18,74Z" fill="#1A1A18"/>
      <path d="M10,46 Q2,54 -4,60 Q-6,56 -2,52 Q4,46 8,42Z" fill="#1A1A18"/>
      <path d="M24,44 Q34,38 40,34 Q42,38 39,41 Q32,44 28,48Z" fill="#1A1A18"/>
    </g>
    <g transform="translate(158,22)">
      <ellipse cx="18" cy="56" rx="10" ry="20" fill="#1A1A18" transform="rotate(-6 18 56)"/>
      <circle cx="15" cy="34" r="11" fill="#1A1A18"/>
      <ellipse cx="11" cy="27" rx="6" ry="3.5" fill="#1A1A18"/>
      <path d="M17,74 Q11,92 5,104 Q8,110 14,105 Q17,95 21,82Z" fill="#1A1A18"/>
      <path d="M20,74 Q30,86 36,98 Q33,104 28,100 Q24,89 18,78Z" fill="#1A1A18"/>
      <path d="M11,48 Q3,56 -3,62 Q-5,58 -1,54 Q5,48 9,44Z" fill="#1A1A18"/>
      <path d="M25,46 Q35,40 42,36 Q44,40 41,43 Q34,46 30,50Z" fill="#1A1A18"/>
    </g>
    <g transform="translate(228,20)">
      <ellipse cx="18" cy="56" rx="10" ry="20" fill="#1A1A18" transform="rotate(-5 18 56)"/>
      <circle cx="16" cy="34" r="11" fill="#1A1A18"/>
      <ellipse cx="12" cy="27" rx="6" ry="3.5" fill="#1A1A18"/>
      <path d="M18,75 Q12,93 6,105 Q9,111 15,106 Q18,96 22,83Z" fill="#1A1A18"/>
      <path d="M20,75 Q30,87 36,99 Q33,105 28,101 Q24,90 18,79Z" fill="#1A1A18"/>
      <path d="M12,49 Q4,57 -2,63 Q-4,59 0,55 Q6,49 10,45Z" fill="#1A1A18"/>
      <path d="M26,47 Q36,41 43,37 Q45,41 42,44 Q35,47 31,51Z" fill="#1A1A18"/>
    </g>
    <g transform="translate(300,18)">
      <ellipse cx="18" cy="56" rx="10" ry="20" fill="#1A1A18" transform="rotate(-4 18 56)"/>
      <circle cx="17" cy="34" r="11" fill="#1A1A18"/>
      <ellipse cx="13" cy="27" rx="6" ry="3.5" fill="#1A1A18"/>
      <path d="M19,75 Q13,93 7,105 Q10,111 16,106 Q19,96 23,83Z" fill="#1A1A18"/>
      <path d="M20,75 Q30,87 36,99 Q33,105 28,101 Q24,90 18,79Z" fill="#1A1A18"/>
      <path d="M13,49 Q5,57 -1,63 Q-3,59 1,55 Q7,49 11,45Z" fill="#1A1A18"/>
      <path d="M25,44 Q32,28 36,16 Q40,14 41,18 Q38,28 32,46Z" fill="#1A1A18"/>
      <rect x="34" y="6" width="5" height="14" rx="2" fill="#1A1A18"/>
      <path d="M34,6 Q36,0 38,3 Q40,-1 36,6Z" fill="#C8941E"/>
      <path d="M36,5 Q37,1 39,4 Q38,8 36,6Z" fill="#FFD700" opacity="0.8"/>
    </g>
  </svg>
)

export default function Origen() {
  const ref = useReveal()
  return (
    <section id="origen" className={styles.section} ref={ref}>
      <div className={styles.meander} />
      <div className={styles.inner}>
        <div className={`${styles.textBlock} reveal`}>
          <span className="section-label">El origen · VIII a.C.</span>
          <h2 className="section-title">De <em>Samos</em> a<br />Montevideo</h2>
          <p className={styles.tagline}>Dos islas, dos culturas, una tradición que viaja siglos.</p>
          <p className={styles.body}>En la isla de Samos, <strong>Hera</strong> — diosa del Olimpo, patrona de la isla — era honrada con ofrendas en el gran templo de 155 columnas. Entre esas ofrendas, una preparación cremosa de queso fresco, miel y trigo: el primer <em>plakous</em>, la primera tarta de queso de la historia.</p>
          <p className={styles.body}>Siglos después, esa receta viajó por el Mediterráneo, cruzó el Atlántico y llegó a Uruguay, donde una familia la heredó y la trajo a Madrid.</p>
          <p className={styles.body}>Hoy, en Ciempozuelos, Velhio la elabora a mano — igual que entonces.</p>
        </div>
        <div className={`${styles.visual} reveal rd2`}>
          <AmphVase />
          <p className={styles.vaseCaption}>Atletas olímpicos · Estilo ánfora ática · V a.C.</p>
        </div>
      </div>
      <div className={styles.meander} />
    </section>
  )
}