import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        Vel<span>h</span>io
        <span className={styles.logoSub}>Tartas de queso artesanales</span>
      </div>

      <p className={styles.copy}>
        © 2025 Velhio® · Todos los derechos reservados · Ciempozuelos, Madrid
      </p>

      <div className={styles.social}>
        <a
          href="https://www.instagram.com/velhio.r/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram →
        </a>
      </div>
    </footer>
  )
}
