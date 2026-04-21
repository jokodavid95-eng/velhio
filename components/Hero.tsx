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
    let raf = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onScroll = () => { scrollRef.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    /* ── Particles ── */
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      vy: Math.random() * 0.25 + 0.08,
      vx: (Math.random() - 0.5) * 0.18,
      opacity: Math.random() * 0.35 + 0.08,
    }))

    /* ── Eggs state ── */
    const eggs = [
      { cx: 0.28, cy: 0.54, tilt: -0.22, phase: 0 },
      { cx: 0.5,  cy: 0.50, tilt:  0.08, phase: 1.2 },
      { cx: 0.72, cy: 0.54, tilt:  0.28, phase: 2.4 },
    ]

    /* ── Whisk orbit ── */
    let whiskAngle = 0
    let mixAngle = 0

    function drawEgg(
      cx: number, cy: number,
      rx: number, ry: number,
      tilt: number,
      t: number, phase: number
    ) {
      const floatY = Math.sin(t * 0.0007 + phase) * 6
      ctx.save()
      ctx.translate(cx, cy + floatY)
      ctx.rotate(tilt)

      /* shadow */
      ctx.save()
      ctx.shadowColor = 'rgba(0,0,0,0.45)'
      ctx.shadowBlur = 30

      /* shell gradient */
      const grad = ctx.createRadialGradient(-rx * 0.2, -ry * 0.25, rx * 0.05, 0, 0, rx * 1.3)
      grad.addColorStop(0, '#FFF8EE')
      grad.addColorStop(0.45, '#F5EFE0')
      grad.addColorStop(1, '#D4C8A8')
      ctx.fillStyle = grad

      /* egg shape: wider at bottom */
      ctx.beginPath()
      ctx.save()
      ctx.scale(1, 1.32)
      ctx.arc(0, ry * 0.1, rx, 0, Math.PI * 2)
      ctx.restore()
      ctx.fill()
      ctx.restore()

      /* highlight */
      ctx.beginPath()
      ctx.ellipse(-rx * 0.22, -ry * 0.3, rx * 0.28, ry * 0.18, -0.5, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.55)'
      ctx.fill()

      /* subtle gold rim */
      ctx.beginPath()
      ctx.save()
      ctx.scale(1, 1.32)
      ctx.arc(0, ry * 0.1, rx, 0, Math.PI * 2)
      ctx.restore()
      ctx.strokeStyle = 'rgba(212,168,67,0.18)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      ctx.restore()
    }

    function drawWhisk(bowlCX: number, bowlCY: number, bowlR: number, t: number) {
      whiskAngle += 0.035
      mixAngle += 0.022

      /* whisk orbits slowly inside bowl */
      const orbitR = bowlR * 0.38
      const wx = bowlCX + Math.cos(whiskAngle * 0.6) * orbitR
      const wy = bowlCY + Math.sin(whiskAngle * 0.6) * orbitR * 0.3

      const handleLen = bowlR * 0.9

      ctx.save()
      ctx.translate(wx, wy)
      ctx.rotate(Math.sin(whiskAngle * 0.4) * 0.25)

      /* handle – wooden dowel */
      const hGrad = ctx.createLinearGradient(-4, -handleLen, 4, -handleLen * 0.1)
      hGrad.addColorStop(0, '#C8955A')
      hGrad.addColorStop(0.5, '#E8B870')
      hGrad.addColorStop(1, '#A07040')
      ctx.beginPath()
      ctx.roundRect(-4, -handleLen, 8, handleLen * 0.55, 3)
      ctx.fillStyle = hGrad
      ctx.fill()

      /* handle grip rings */
      for (let i = 0; i < 4; i++) {
        const gy = -handleLen + handleLen * 0.08 + i * handleLen * 0.1
        ctx.beginPath()
        ctx.rect(-5, gy, 10, 2)
        ctx.fillStyle = 'rgba(120,70,20,0.35)'
        ctx.fill()
      }

      /* metal collar */
      ctx.beginPath()
      ctx.rect(-6, -handleLen * 0.48, 12, 14)
      ctx.fillStyle = '#C0C0B8'
      ctx.fill()
      ctx.strokeStyle = 'rgba(212,168,67,0.5)'
      ctx.lineWidth = 1
      ctx.stroke()

      /* whisk wires – 8 teardrop loops */
      const wireColors = [
        'rgba(200,200,195,0.9)',
        'rgba(220,220,215,0.7)',
        'rgba(180,180,175,0.8)',
        'rgba(212,168,67,0.4)',
      ]
      const wireCount = 8
      const wireSpread = bowlR * 0.22
      const wireLen = bowlR * 0.42
      ctx.lineWidth = 1.4
      ctx.lineCap = 'round'
      for (let w = 0; w < wireCount; w++) {
        const a = (w / wireCount) * Math.PI * 2 + mixAngle
        const ex = Math.cos(a) * wireSpread
        const ey = wireLen
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.quadraticCurveTo(ex * 1.6, wireLen * 0.55, ex, ey)
        ctx.strokeStyle = wireColors[w % wireColors.length]
        ctx.stroke()
      }

      ctx.restore()

      /* batter splash around whisk base – tiny droplets */
      for (let d = 0; d < 5; d++) {
        const da = whiskAngle * 2 + d * (Math.PI * 2 / 5)
        const dr = bowlR * (0.08 + Math.sin(t * 0.003 + d) * 0.04)
        ctx.beginPath()
        ctx.arc(
          wx + Math.cos(da) * dr,
          wy + Math.sin(da) * dr * 0.4,
          1.5, 0, Math.PI * 2
        )
        ctx.fillStyle = 'rgba(245,239,224,0.4)'
        ctx.fill()
      }
    }

    function drawBowl(cx: number, cy: number, r: number, t: number) {
      /* bowl shadow */
      ctx.save()
      ctx.shadowColor = 'rgba(212,168,67,0.12)'
      ctx.shadowBlur = 60

      /* outer bowl body */
      ctx.beginPath()
      ctx.ellipse(cx, cy + r * 0.18, r * 1.05, r * 0.62, 0, 0, Math.PI)
      ctx.fillStyle = '#1C1C18'
      ctx.fill()

      /* bowl rim ellipse */
      ctx.beginPath()
      ctx.ellipse(cx, cy - r * 0.22, r, r * 0.24, 0, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(212,168,67,0.3)'
      ctx.lineWidth = 3
      ctx.stroke()
      ctx.fillStyle = '#141412'
      ctx.fill()
      ctx.restore()

      /* batter fill */
      ctx.save()
      ctx.beginPath()
      ctx.ellipse(cx, cy - r * 0.22, r * 0.94, r * 0.21, 0, 0, Math.PI * 2)
      ctx.clip()

      const bg = ctx.createRadialGradient(cx, cy - r * 0.22, 0, cx, cy - r * 0.22, r * 0.9)
      bg.addColorStop(0, '#F0E8D4')
      bg.addColorStop(0.7, '#E0D4B8')
      bg.addColorStop(1, '#C8BC98')
      ctx.fillStyle = bg
      ctx.fillRect(cx - r * 1.1, cy - r * 0.5, r * 2.2, r * 0.6)

      /* batter swirl lines */
      for (let s = 0; s < 3; s++) {
        const sa = mixAngle * 1.5 + s * (Math.PI * 2 / 3)
        const sx = cx + Math.cos(sa) * r * 0.42
        const sy = cy - r * 0.22 + Math.sin(sa) * r * 0.07
        ctx.beginPath()
        ctx.arc(sx, sy, r * 0.13, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(212,168,67,0.25)'
        ctx.lineWidth = 2
        ctx.stroke()
      }

      /* small flour puffs */
      for (let p = 0; p < 4; p++) {
        const pa = mixAngle * 0.8 + p * (Math.PI / 2)
        const px = cx + Math.cos(pa) * r * 0.3
        const py = cy - r * 0.22 + Math.sin(pa) * r * 0.05
        ctx.beginPath()
        ctx.arc(px, py, 4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.2)'
        ctx.fill()
      }

      ctx.restore()

      /* bowl inner rim highlight */
      ctx.beginPath()
      ctx.ellipse(cx, cy - r * 0.22, r * 0.94, r * 0.21, 0, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 2
      ctx.stroke()

      /* outer bowl gloss */
      ctx.beginPath()
      ctx.ellipse(cx - r * 0.3, cy - r * 0.05, r * 0.18, r * 0.32, -0.4, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.04)'
      ctx.fill()
    }

    /* ── Floating flour dust ── */
    const flourDust = Array.from({ length: 18 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -(Math.random() * 0.15 + 0.05),
      life: Math.random(),
      maxLife: 0.3 + Math.random() * 0.5,
    }))

    // Capture reference so TypeScript knows it's non-null inside the closure
    const c = canvas

    function draw(t: number) {
      const W = c.width
      const H = c.height
      const parallax = scrollRef.current * 0.25
      ctx.clearRect(0, 0, W, H)

      /* background */
      const bgGrad = ctx.createRadialGradient(W * 0.5, H * 0.38, 0, W * 0.5, H * 0.5, W * 0.85)
      bgGrad.addColorStop(0, '#2A2820')
      bgGrad.addColorStop(1, '#0A0A08')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, W, H)

      /* subtle grid */
      ctx.strokeStyle = 'rgba(212,168,67,0.035)'
      ctx.lineWidth = 1
      for (let x = 0; x < W; x += 64) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += 64) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }

      /* particles */
      particles.forEach(p => {
        p.y -= p.vy; p.x += p.vx
        if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W }
        if (p.x < -4) p.x = W + 4
        if (p.x > W + 4) p.x = -4
        ctx.beginPath()
        ctx.arc(p.x, p.y + parallax * 0.05, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,168,67,${p.opacity})`
        ctx.fill()
      })

      /* flour dust */
      flourDust.forEach(d => {
        d.x += d.vx / W; d.y += d.vy / H; d.life += 0.004
        if (d.life > d.maxLife) {
          d.x = 0.2 + Math.random() * 0.6
          d.y = 0.5 + Math.random() * 0.3
          d.life = 0
        }
        const alpha = Math.sin((d.life / d.maxLife) * Math.PI) * 0.15
        ctx.beginPath()
        ctx.arc(d.x * W, d.y * H + parallax * 0.08, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245,239,224,${alpha})`
        ctx.fill()
      })

      /* decorative rings */
      const bowlCX = W * 0.5
      const bowlCY = H * 0.56 + parallax * 0.12
      const bowlR = Math.min(W * 0.18, 130)

      ;[2.2, 2.8, 3.5].forEach((mul, i) => {
        ctx.beginPath()
        ctx.arc(bowlCX, bowlCY - bowlR * 0.22, bowlR * mul, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(212,168,67,${0.055 - i * 0.015})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      /* eggs */
      const eggW = bowlR * 0.45
      const eggH = bowlR * 0.55
      eggs.forEach(e => {
        drawEgg(
          W * e.cx, H * 0.3 + parallax * 0.08,
          eggW, eggH,
          e.tilt, t, e.phase
        )
      })

      /* bowl */
      drawBowl(bowlCX, bowlCY, bowlR, t)

      /* whisk */
      drawWhisk(bowlCX, bowlCY, bowlR, t)

      /* golden glow under bowl */
      const glowGrad = ctx.createRadialGradient(bowlCX, bowlCY + bowlR * 0.5, 0, bowlCX, bowlCY + bowlR * 0.5, bowlR * 1.2)
      glowGrad.addColorStop(0, 'rgba(212,168,67,0.07)')
      glowGrad.addColorStop(1, 'rgba(212,168,67,0)')
      ctx.fillStyle = glowGrad
      ctx.fillRect(bowlCX - bowlR * 1.5, bowlCY, bowlR * 3, bowlR * 1.2)

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
        <h1 className={styles.title}>
          Vel<em>hio</em>
        </h1>
        <p className={styles.tagline}>
          Una cucharada y ya no hay vuelta atrás
        </p>
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
        <span>Descubrir</span>
      </div>
    </section>
  )
}
