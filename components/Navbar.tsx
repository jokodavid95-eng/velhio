'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        Vel<span>h</span>io
      </Link>

      <ul className={styles.links}>
        {[
          ['#historia', 'Nuestra historia'],
          ['#favoritas', 'Las preferidas'],
          ['#carta', 'Carta'],
          ['#contacto', 'Contacto'],
        ].map(([href, label]) => (
          <li key={href}>
            <a href={href} className={styles.link}>{label}</a>
          </li>
        ))}
      </ul>

      <a
        href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20una%20tarta"
        className={styles.phone}
        target="_blank"
        rel="noopener noreferrer"
      >
        661 764 709
      </a>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Menú"
      >
        <span className={menuOpen ? styles.burgerOpen : ''} />
        <span className={menuOpen ? styles.burgerOpen : ''} />
        <span className={menuOpen ? styles.burgerOpen : ''} />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {[
            ['#historia', 'Nuestra historia'],
            ['#favoritas', 'Las preferidas'],
            ['#carta', 'Carta'],
            ['#contacto', 'Contacto'],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className={styles.mobileLink}>
              {label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20una%20tarta"
            className={styles.mobileCta}
            target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            661 764 709
          </a>
        </div>
      )}
    </nav>
  )
}
