'use client'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.12)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={styles.hero}>
      <video ref={videoRef} className={styles.video} src="/hero.mp4" autoPlay muted loop playsInline />
      <div className={styles.overlay} />
      <div className={styles.bottomFade} />
      <div className={styles.content}>
        <p className={styles.label}>Madrid · Tartas de queso artesanales</p>
        <h1 className={styles.title}>Vel<em>hio</em></h1>
        <p className={styles.tagline}>Una cucharada y ya no hay vuelta atrás</p>
        <div className={styles.cta}>
          <a href="#favoritas" className="btn-gold">Ver las tartas</a>
          <a href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20una%20tarta" className="btn-outline" target="_blank" rel="noopener noreferrer">Hacer un pedido</a>
        </div>
      </div>
      <div className={styles.scrollHint}><div className={styles.scrollLine} /></div>
    </section>
  )
}