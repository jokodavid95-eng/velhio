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
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:200,padding:'1.6rem 4rem',display:'flex',justifyContent:'space-between',alignItems:'center',background:'transparent',pointerEvents:'none'}}>
        <Link href="/" style={{fontFamily:"'Playfair Display',serif",fontSize:'1.7rem',fontWeight:700,color:'#F5EFE0',textDecoration:'none',pointerEvents:'auto',textShadow:'0 2px 20px rgba(0,0,0,0.6)'}}>
          Vel<span style={{color:'#D4A843'}}>h</span>io
        </Link>
        <ul style={{display:'flex',gap:'0.5rem',listStyle:'none',margin:0,padding:0,pointerEvents:'auto'}}>
          {[['#historia','Historia'],['#favoritas','Preferidas'],['#carta','Carta'],['#contacto','Contacto']].map(([href,label])=>(
            <li key={href}><a href={href} style={{fontSize:'0.68rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(245,239,224,0.9)',textDecoration:'none',fontFamily:"'Jost',sans-serif",background:'rgba(20,18,14,0.55)',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',border:'1px solid rgba(212,168,67,0.2)',borderRadius:'2rem',padding:'0.4rem 1rem',display:'block'}}
             onMouseEnter={e=>{e.currentTarget.style.background='rgba(212,168,67,0.9)';e.currentTarget.style.borderColor='rgba(212,168,67,1)';e.currentTarget.style.color='#1A1A18'}}
 onMouseLeave={e=>{e.currentTarget.style.background='rgba(20,18,14,0.55)';e.currentTarget.style.borderColor='rgba(212,168,67,0.3)';e.currentTarget.style.color='rgba(245,239,224,0.9)'}}
             onMouseLeave={e => { e.currentTarget.style.background = 'rgba(20,18,14,0.55)'; e.currentTarget.style.borderColor = 'rgba(212,168,67,0.3)' }}
            >{label}</a></li>
          ))}
        </ul>
        <a href="tel:+34661764709" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.05rem',color:'#D4A843',textDecoration:'none',pointerEvents:'auto'}}>661 764 709</a>
      </nav>

      <div className="mobile-bottom-bar" style={{position:'fixed',bottom:'1.2rem',left:'50%',transform:'translateX(-50%)',zIndex:9999,display:'flex',justifyContent:'center',alignItems:'center',gap:'0.5rem'}}>
        {[
          {href:'#historia',icon:'◈',label:'Historia'},
          {href:'#favoritas',icon:'✦',label:'Preferidas'},
          {href:'#carta',icon:'◎',label:'Carta'},
          {href:'#contacto',icon:'◉',label:'Contacto'},
          {href:'https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20una%20tarta',icon:'✉',label:'Pedir',ext:true},
        ].map(item=>(
          <a key={item.href} href={item.href} target={item.ext?'_blank':undefined} rel={item.ext?'noopener noreferrer':undefined} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'0.2rem',textDecoration:'none',background:item.ext?'#D4A843':'rgba(20,18,14,0.6)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',border:item.ext?'1px solid rgba(212,168,67,0.6)':'1px solid rgba(212,168,67,0.25)',borderRadius:'2rem',padding:'0.5rem 0.8rem 0.45rem',minWidth:'3.2rem',boxShadow:'0 4px 20px rgba(0,0,0,0.3)'}}>
            <span style={{fontSize:'1rem',color:item.ext?'#1A1A18':'rgba(245,239,224,0.85)',lineHeight:1}}>{item.icon}</span>
            <span style={{fontSize:'0.5rem',letterSpacing:'0.06em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,color:item.ext?'#1A1A18':'rgba(245,239,224,0.7)'}}>{item.label}</span>
          </a>
        ))}
      </div>

      <style>{`
        @media (min-width: 901px) { .mobile-bottom-bar { display: none !important; } }
        @media (max-width: 900px) { nav ul { display: none !important; } nav > a:last-of-type { display: none !important; } nav { padding: 1rem 1.5rem !important; } body { padding-bottom: 90px; } }
      `}</style>
    </>
  )
}