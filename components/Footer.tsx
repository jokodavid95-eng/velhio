import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMeander} />
      <div className={styles.footerMain}>
        <div className={styles.logo}>
          <span style={{whiteSpace:'nowrap'}}>Vel<span style={{color:'#C8941E'}}>h</span>io</span>
          <span className={styles.logoSub}>De Samos a Montevideo · Desde el VIII a.C.</span>
        </div>
        <p className={styles.copy}>
          © 2025 Velhio® · Todos los derechos reservados · Ciempozuelos, Madrid
        </p>
        <div className={styles.social}>
          <a href="https://www.instagram.com/velhio.r/?hl=es" target="_blank" rel="noopener noreferrer">
            Instagram →
          </a>
        </div>
      </div>
    </footer>
  )
}