'use client'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const c = canvas
    let raf = 0
    let t = 0

    const resize = () => {
      c.width = c.offsetWidth
      c.height = c.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)
    const onScroll = () => { scrollRef.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    /* ── particles ── */
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.5 + 0.3,
      vy: Math.random() * 0.2 + 0.06,
      vx: (Math.random() - 0.5) * 0.12,
      o: Math.random() * 0.3 + 0.08,
    }))

    /* ── drips ── */
    const drips = Array.from({ length: 10 }, (_, i) => ({
      offsetX: (i - 5) * 0.038,
      y: Math.random() * 0.15,
      vy: 0.0005 + Math.random() * 0.0007,
      r: 3 + Math.random() * 4,
      alpha: 0.75 + Math.random() * 0.25,
    }))

    /* ── splatter pools ── */
    const pools = Array.from({ length: 14 }, () => ({
      ox: (Math.random() - 0.5) * 0.35,
      oy: 0.86 + Math.random() * 0.1,
      r: 2 + Math.random() * 5,
      alpha: 0.08 + Math.random() * 0.18,
    }))

    function drawSlice(W: number, H: number, parallax: number) {
      const cx = W * 0.5
      const cy = H * 0.5 + parallax * 0.2

      const sw = Math.min(W * 0.55, 480)
      const sh = Math.min(H * 0.38, 300)

      /* plate shadow */
      const shadowG = ctx.createRadialGradient(cx, cy + sh * 1.1, 0, cx, cy + sh * 1.1, sw * 0.7)
      shadowG.addColorStop(0, 'rgba(0,0,0,0.5)')
      shadowG.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = shadowG
      ctx.fillRect(cx - sw, cy + sh * 0.7, sw * 2, sh * 0.8)

      /* crust */
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(cx - sw * 0.5, cy + sh * 0.78)
      ctx.lineTo(cx + sw * 0.5, cy + sh * 0.78)
      ctx.lineTo(cx + sw * 0.49, cy + sh)
      ctx.lineTo(cx - sw * 0.49, cy + sh)
      ctx.closePath()
      const crustG = ctx.createLinearGradient(cx, cy + sh * 0.78, cx, cy + sh)
      crustG.addColorStop(0, '#8B5E3C')
      crustG.addColorStop(1, '#4A2A0A')
      ctx.fillStyle = crustG
      ctx.shadowColor = 'rgba(0,0,0,0.6)'
      ctx.shadowBlur = 25
      ctx.fill()
      ctx.restore()

      /* cream body */
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(cx - sw * 0.5, cy + sh * 0.78)
      ctx.lineTo(cx - sw * 0.5, cy + sh * 0.12)
      ctx.quadraticCurveTo(cx, cy - sh * 0.06, cx + sw * 0.5, cy + sh * 0.12)
      ctx.lineTo(cx + sw * 0.5, cy + sh * 0.78)
      ctx.closePath()
      const bodyG = ctx.createLinearGradient(cx - sw * 0.5, cy, cx + sw * 0.5, cy + sh)
      bodyG.addColorStop(0, '#FAF6EC')
      bodyG.addColorStop(0.6, '#EEE4CC')
      bodyG.addColorStop(1, '#DDD0B0')
      ctx.fillStyle = bodyG
      ctx.shadowColor = 'rgba(0,0,0,0.35)'
      ctx.shadowBlur = 30
      ctx.fill()
      ctx.restore()

      /* burned top */
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(cx - sw * 0.5, cy + sh * 0.12)
      ctx.quadraticCurveTo(cx, cy - sh * 0.06, cx + sw * 0.5, cy + sh * 0.12)
      ctx.quadraticCurveTo(cx + sw * 0.38, cy + sh * 0.26, cx, cy + sh * 0.2)
      ctx.quadraticCurveTo(cx - sw * 0.38, cy + sh * 0.26, cx - sw * 0.5, cy + sh * 0.12)
      ctx.closePath()
      const topG = ctx.createLinearGradient(cx - sw * 0.5, cy, cx + sw * 0.5, cy + sh * 0.25)
      topG.addColorStop(0, '#C07838')
      topG.addColorStop(0.35, '#D4A843')
      topG.addColorStop(0.7, '#B06830')
      topG.addColorStop(1, '#7A3E10')
      ctx.fillStyle = topG
      ctx.fill()
      ctx.restore()

      /* top shine */
      ctx.save()
      ctx.beginPath()
      ctx.ellipse(cx - sw * 0.08, cy + sh * 0.07, sw * 0.18, sh * 0.035, -0.25, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.2)'
      ctx.fill()
      ctx.restore()

      /* cut face (left side) - visible interior */
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(cx - sw * 0.5, cy + sh * 0.12)
      ctx.lineTo(cx - sw * 0.5, cy + sh * 0.78)
      ctx.lineTo(cx - sw * 0.5 + 8, cy + sh * 0.78)
      ctx.lineTo(cx - sw * 0.5 + 8, cy + sh * 0.14)
      ctx.closePath()
      ctx.fillStyle = 'rgba(252,248,238,0.55)'
      ctx.fill()
      ctx.restore()

      /* drips from left cut face */
      const faceX = cx - sw * 0.5
      const dripStartY = cy + sh * 0.28

      drips.forEach(d => {
        const dx = faceX + d.offsetX * sw * 0.25
        const dy = dripStartY + d.y * H * 0.38

        /* trail */
        const dG = ctx.createLinearGradient(dx, dripStartY, dx, dy)
        dG.addColorStop(0, `rgba(252,248,236,${d.alpha})`)
        dG.addColorStop(0.6, `rgba(242,235,212,${d.alpha * 0.65})`)
        dG.addColorStop(1, 'rgba(242,235,212,0)')
        ctx.beginPath()
        ctx.moveTo(dx - d.r * 0.55, dripStartY)
        ctx.bezierCurveTo(
          dx - d.r, dripStartY + (dy - dripStartY) * 0.35,
          dx + d.r * 0.8, dripStartY + (dy - dripStartY) * 0.65,
          dx, dy
        )
        ctx.lineTo(dx + d.r * 0.55, dripStartY)
        ctx.closePath()
        ctx.fillStyle = dG
        ctx.fill()

        /* bulb */
        const bulbR = d.r * (1 + Math.sin(t * 0.025 + d.offsetX * 8) * 0.12)
        ctx.beginPath()
        ctx.arc(dx, dy, bulbR, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(252,248,236,${d.alpha * 0.9})`
        ctx.fill()

        d.y += d.vy
        if (d.y > 0.52) d.y = 0.01 + Math.random() * 0.06
      })

      /* cream pools on surface */
      pools.forEach(p => {
        const px = faceX + p.ox * sw * 0.6
        const py = cy + sh * p.oy + parallax * 0.05
        ctx.beginPath()
        ctx.ellipse(px, py, p.r * 2.2, p.r, 0, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(252,248,236,${p.alpha})`
        ctx.fill()
      })

      /* ambient glow */
      const glow = ctx.createRadialGradient(cx, cy + sh * 0.4, 0, cx, cy + sh * 0.4, W * 0.45)
      glow.addColorStop(0, 'rgba(212,168,67,0.07)')
      glow.addColorStop(1, 'rgba(212,168,67,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, cy - sh * 0.3, W, sh * 2)
    }

    function draw() {
      const W = c.width
      const H = c.height
      const parallax = scrollRef.current * 0.28
      ctx.clearRect(0, 0, W, H)

      /* background */
      const bg = ctx.createRadialGradient(W * 0.5, H * 0.38, 0, W * 0.5, H * 0.6, W * 0.9)
      bg.addColorStop(0, '#26221C')
      bg.addColorStop(1, '#060604')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      /* grid */
      ctx.strokeStyle = 'rgba(212,168,67,0.028)'
      ctx.lineWidth = 1
      for (let x = 0; x < W; x += 72) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke() }
      for (let y = 0; y < H; y += 72) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke() }

      /* particles */
      particles.forEach(p => {
        p.y -= p.vy / H; p.x += p.vx / W
        if (p.y < 0) { p.y = 1; p.x = Math.random() }
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0
        ctx.beginPath()
        ctx.arc(p.x * W, p.y * H + parallax * 0.03, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,168,67,${p.o})`
        ctx.fill()
      })

      /* rings */
      const rX = W * 0.5, rY = H * 0.5 + parallax * 0.2
      ;[1.2, 1.7, 2.3].forEach((m, i) => {
        ctx.beginPath()
        ctx.ellipse(rX, rY + H * 0.2, W * 0.3 * m, H * 0.05 * m, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(212,168,67,${0.05 - i * 0.012})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      drawSlice(W, H, parallax)

      t++
      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.label}>Madrid · Tartas de queso artesanales</p>
        <h1 className={styles.title}>Vel<em>hio</em></h1>
        <p className={styles.tagline}>Una cucharada y ya no hay vuelta atrás</p>
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
