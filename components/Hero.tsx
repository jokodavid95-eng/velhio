'use client'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (videoRef.current) {
        // Parallax: video moves slower than scroll
        videoRef.current.style.transform = `translateY(${y * 0.35}px) scale(1.12)`
      }
      if (overlayRef.current) {
        // Overlay gets darker as you scroll
        const opacity = Math.min(0.55 + y * 0.001, 0.88)
        overlayRef.current.style.background = `rgba(8,8,6,${opacity})`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Video background */}
      <video
        ref={videoRef}
        className={styles.video}
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlay */}
      <div ref={overlayRef} className={styles.overlay} />

      {/* Bottom fade to black */}
      <div className={styles.bottomFade} />

      <div className={styles.content}>
        <p className={styles.label}>Samos · Uruguay · Madrid — Desde el VIII a.C.</p>
        <h1 className={styles.title}>Vel<em>hio</em></h1>
        <p className={styles.tagline}>La receta más antigua del mundo, hecha a mano hoy</p>
        <div className={styles.cta}>
          <a href="#favoritas" className="btn-gold">Ver las tartas</a>
          <a
            href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20una%20tarta"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hacer un pedido
          </a>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
