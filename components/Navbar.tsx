'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:200,
        padding: scrolled ? '0.9rem 4rem' : '1.6rem 4rem',
        display:'flex', justifyContent:'space-between', alignItems:'center',
        background: scrolled ? 'rgba(26,26,24,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition:'all 0.4s ease',
      }}>
        <Link href="/" style={{fontFamily:"'Playfair Display',serif",fontSize:'1.7rem',fontWeight:700,color:'#F5EFE0',textDecoration:'none'}}>
          Vel<span style={{color:'#D4A843'}}>h</span>io
        </Link>
        <ul style={{display:'flex',gap:'2.5rem',listStyle:'none',margin:0,padding:0}}>
          {[['#historia','Nuestra historia'],['#favoritas','Las preferidas'],['#carta','Carta'],['#contacto','Contacto']].map(([href,label]) => (
            <li key={href}><a href={href} style={{fontSize:'0.7rem',letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(245,239,224,0.78)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}>{label}</a></li>
          ))}
        </ul>
        <a href="tel:+34661764709" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.05rem',color:'#D4A843',textDecoration:'none'}}>661 764 709</a>
      </nav>

      <div className="mobile-bottom-bar">
        {[
          {href:'#historia',icon:'◈',label:'Historia'},
          {href:'#favoritas',icon:'✦',label:'Preferidas'},
          {href:'#carta',icon:'◎',label:'Carta'},
          {href:'#contacto',icon:'◉',label:'Contacto'},
          {href:'https://api.whatsapp.com/send?phone=+34661764709&text=Hola',icon:'◐',label:'Pedir',ext:true},
        ].map(item => (
          <a key={item.href} href={item.href} target={item.ext ? '_blank' : undefined} rel={item.ext ? 'noopener noreferrer' : undefined} className={item.ext ? 'mobile-bar-cta' : 'mobile-bar-item'}>
            <span className="mobile-bar-icon">{item.icon}</span>
            <span className="mobile-bar-label">{item.label}</span>
          </a>
        ))}
      </div>

      <style>{`
        .mobile-bottom-bar {
          display: none;
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 9999;
          background: #1A1A18;
          border-top: 1px solid rgba(212,168,67,0.2);
          justify-content: space-around;
          align-items: center;
          padding: 0.6rem 0 0.9rem;
        }
        .mobile-bar-item, .mobile-bar-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          text-decoration: none;
          color: rgba(245,239,224,0.65);
          min-width: 20%;
        }
        .mobile-bar-cta { color: #D4A843; }
        .mobile-bar-icon { font-size: 1.2rem; line-height: 1; }
        .mobile-bar-label { font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase; font-family: 'Jost', sans-serif; }
        @media (max-width: 900px) {
          .mobile-bottom-bar { display: flex !important; }
          nav ul { display: none !important; }
          nav > a:last-of-type { display: none !important; }
          nav { padding: 1rem 1.5rem !important; }
          body { padding-bottom: 70px; }
        }
        @media (min-width: 901px) {
          .mobile-bottom-bar { display: none !important; }
        }
      `}</style>
    </>
  )
}