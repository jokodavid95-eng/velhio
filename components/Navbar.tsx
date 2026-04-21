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
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.logo}>Vel<span>h</span>io</Link>
        <ul className={styles.links}>
          <li><a href="#historia" className={styles.link}>Nuestra historia</a></li>
          <li><a href="#favoritas" className={styles.link}>Las preferidas</a></li>
          <li><a href="#carta" className={styles.link}>Carta</a></li>
          <li><a href="#contacto" className={styles.link}>Contacto</a></li>
        </ul>
        <a href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20una%20tarta" className={styles.phone} target="_blank" rel="noopener noreferrer">661 764 709</a>
        <button className={styles.burger} onClick={() => setMenuOpen(o => !o)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'#1A1A18',zIndex:10000,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'2rem',padding:'2rem'}}>
          <a href="#historia" onClick={() => setMenuOpen(false)} style={{fontFamily:"'Playfair Display',serif",fontSize:'1.8rem',fontWeight:600,color:'#F5EFE0',textDecoration:'none'}}>Nuestra historia</a>
          <a href="#favoritas" onClick={() => setMenuOpen(false)} style={{fontFamily:"'Playfair Display',serif",fontSize:'1.8rem',fontWeight:600,color:'#F5EFE0',textDecoration:'none'}}>Las preferidas</a>
          <a href="#carta" onClick={() => setMenuOpen(false)} style={{fontFamily:"'Playfair Display',serif",fontSize:'1.8rem',fontWeight:600,color:'#F5EFE0',textDecoration:'none'}}>Carta</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)} style={{fontFamily:"'Playfair Display',serif",fontSize:'1.8rem',fontWeight:600,color:'#F5EFE0',textDecoration:'none'}}>Contacto</a>
          <a href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20una%20tarta" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} style={{background:'#D4A843',color:'#1A1A18',padding:'1rem 2.5rem',fontFamily:"'Jost',sans-serif",fontSize:'0.72rem',letterSpacing:'0.2em',textTransform:'uppercase',fontWeight:500,textDecoration:'none'}}>661 764 709</a>
        </div>
      )}
    </>
  )
}