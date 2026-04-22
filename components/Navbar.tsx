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
        background: scrolled ? 'rgba(26,26,24,0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition:'all 0.4s ease',
      }}>
        <Link href="/" style={{fontFamily:"'Playfair Display',serif",fontSize:'1.7rem',fontWeight:700,color:'#F5EFE0',textDecoration:'none'}}>
          Vel<span style={{color:'#D4A843'}}>h</span>io
        </Link>
        <ul style={{display:'flex',gap:'2.5rem',listStyle:'none',margin:0,padding:0}}>
          {[['#historia','Nuestra historia'],['#favoritas','Las preferidas'],['#carta','Carta'],['#contacto','Contacto']].map(([href,label]) => (
            <li key={href}><a href={href} style={{fontSize:'0.7rem',letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(245,239,224,0.78)',textDecoration:'none',fontFamily:"'Jost',sans-serif"}}
              onMouseEnter={e=>(e.currentTarget.style.color='#D4A843')}
              onMouseLeave={e=>(e.currentTarget.style.color='rgba(245,239,224,0.78)')}
            >{label}</a></li>
          ))}
        </ul>
        <a href="tel:+34661764709" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.05rem',color:'#D4A843',textDecoration:'none'}}>661 764 709</a>
      </nav>

      <div className="mobile-bottom-bar" style={{
        position:'fixed', bottom:0, left:0, right:0, zIndex:9999,
        background:'rgba(20,18,16,0.3)',
        backdropFilter:'blur(22px)', WebkitBackdropFilter:'blur(22px)',
        borderTop:'1px solid rgba(212,168,67,0.2)',
        display:'flex', justifyContent:'space-around', alignItems:'center',
        padding:'0.7rem 0.5rem 1rem', gap:'0.3rem',
      }}>
        {[
          {href:'#historia',icon:'◈',label:'Historia'},
          {href:'#favoritas',icon:'✦',label:'Preferidas'},
          {href:'#carta',icon:'◎',label:'Carta'},
          {href:'#contacto',icon:'◉',label:'Contacto'},
          {href:'https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20una%20tarta',icon:'✉',label:'Pedir',ext:true},
        ].map(item=>(
          <a key={item.href} href={item.href} target={item.ext?'_blank':undefined} rel={item.ext?'noopener noreferrer':undefined} style={{
            display:'flex', flexDirection:'column', alignItems:'center', gap:'0.2rem',
            textDecoration:'none',
            background: item.ext ? '#D4A843' : 'rgba(255,255,255,0.08)',
            backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)',
            border: item.ext ? 'none' : '1px solid rgba(212,168,67,0.3)',
            borderRadius:'2rem', padding:'0.45rem 0.7rem 0.4rem', minWidth:'3.5rem',
          }}>
            <span style={{fontSize:'1rem',color:item.ext?'#1A1A18':'rgba(245,239,224,0.75)',lineHeight:1}}>{item.icon}</span>
            <span style={{fontSize:'0.52rem',letterSpacing:'0.08em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,color:item.ext?'#1A1A18':'rgba(245,239,224,0.65)'}}>{item.label}</span>
          </a>
        ))}
      </div>

      <style>{`
        @media (min-width: 901px) { .mobile-bottom-bar { display: none !important; } }
        @media (max-width: 900px) {
          nav ul { display: none !important; }
          nav > a:last-of-type { display: none !importan