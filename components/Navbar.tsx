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
    <>
      <nav className={${styles.nav} }>
        <Link href="/" className={styles.logo}>Vel<span>h</span>io</Link>
        <ul className={styles.links}>
          <li><a href="#historia" className={styles.link}>Nuestra historia</a></li>
          <li><a href="#favoritas" className={styles.link}>Las preferidas</a></li>
          <li><a href="#carta" className={styles.link}>Carta</a></li>
          <li><a href="#contacto" className={styles.link}>Contacto</a></li>
        </ul>
        <a href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola" className={styles.phone} target="_blank" rel="noopener noreferrer">661 764 709</a>
        <button className={styles.burger} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      {menuOpen && (
        <div className="velhio-menu">
          <a href="#historia" onClick={() => setMenuOpen(false)}>Nuestra historia</a>
          <a href="#favoritas" onClick={() => setMenuOpen(false)}>Las preferidas</a>
          <a href="#carta" onClick={() => setMenuOpen(false)}>Carta</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
          <a href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola" className="velhio-menu-cta" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>661 764 709</a>
        </div>
      )}
    </>
  )
}
