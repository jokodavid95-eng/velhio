'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const GreekFlag = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
    <rect width="22" height="15" fill="#0D5EAF"/>
    <rect y="0" width="22" height="1.67" fill="white"/>
    <rect y="3.33" width="22" height="1.67" fill="white"/>
    <rect y="6.67" width="22" height="1.67" fill="white"/>
    <rect y="10" width="22" height="1.67" fill="white"/>
    <rect y="13.33" width="22" height="1.67" fill="white"/>
    <rect width="8" height="8.33" fill="#0D5EAF"/>
    <rect x="3" y="0" width="2" height="8.33" fill="white"/>
    <rect y="3.17" width="8" height="2" fill="white"/>
  </svg>
)

const UruguayFlag = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
    <rect width="22" height="15" fill="white"/>
    <rect y="1.67" width="22" height="1.67" fill="#0038A8"/>
    <rect y="5" width="22" height="1.67" fill="#0038A8"/>
    <rect y="8.33" width="22" height="1.67" fill="#0038A8"/>
    <rect y="11.67" width="22" height="1.67" fill="#0038A8"/>
    <rect width="9" height="8.33" fill="white"/>
    <circle cx="4.5" cy="4.17" r="2.5" fill="#FCD116"/>
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <line key={i}
        x1={4.5 + Math.cos(deg*Math.PI/180)*2.2}
        y1={4.17 + Math.sin(deg*Math.PI/180)*2.2}
        x2={4.5 + Math.cos(deg*Math.PI/180)*3}
        y2={4.17 + Math.sin(deg*Math.PI/180)*3}
        stroke="#FCD116" strokeWidth="0.8"
      />
    ))}
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:200,padding:'1.4rem 4rem',display:'flex',justifyContent:'space-between',alignItems:'center',background:'transparent',pointerEvents:'none'}}>

        {/* Logo + crossed flags — no white border */}
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'0.7rem',textDecoration:'none',pointerEvents:'auto'}}>
          <div style={{position:'relative',width:'44px',height:'30px',flexShrink:0}}>
            <div style={{position:'absolute',top:0,left:0,transform:'rotate(-12deg)',transformOrigin:'bottom right',borderRadius:'2px',boxShadow:'0 2px 8px rgba(0,0,0,0.5)',overflow:'hidden'}}>
              <GreekFlag />
            </div>
            <div style={{position:'absolute',bottom:0,right:0,transform:'rotate(12deg)',transformOrigin:'top left',borderRadius:'2px',boxShadow:'0 2px 8px rgba(0,0,0,0.5)',overflow:'hidden'}}>
              <UruguayFlag />
            </div>
          </div>
          <span style={{fontFamily:"'Playfair Display',serif",fontSize:'1.7rem',fontWeight:700,color:'#F8F6F2',letterSpacing:'0.04em',textShadow:'0 2px 20px rgba(0,0,0,0.7)'}}>
            Vel<span style={{color:'#C8941E'}}>h</span>io
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{display:'flex',gap:'0.5rem',listStyle:'none',margin:0,padding:0,pointerEvents:'auto'}}>
          {[['#historia','Historia'],['#favoritas','Preferidas'],['#carta','Carta'],['#contacto','Contacto']].map(([href,label])=>(
            <li key={href}><a href={href} style={{fontSize:'0.68rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(248,246,242,0.9)',textDecoration:'none',fontFamily:"'Jost',sans-serif",background:'rgba(27,58,92,0.7)',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',border:'1px solid rgba(27,58,92,0.5)',borderRadius:'2rem',padding:'0.4rem 1rem',display:'block',transition:'all 0.2s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(27,58,92,0.95)';e.currentTarget.style.color='#FFFFFF'}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(27,58,92,0.7)';e.currentTarget.style.color='rgba(248,246,242,0.9)'}}
            >{label}</a></li>
          ))}
        </ul>

        <a href="tel:+34661764709" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.05rem',color:'#F8F6F2',textDecoration:'none',pointerEvents:'auto',textShadow:'0 2px 10px rgba(0,0,0,0.6)'}}>661 764 709</a>
      </nav>

      {/* Mobile bottom bar */}
      <div className="mobile-bottom-bar" style={{position:'fixed',bottom:'1.2rem',left:'50%',transform:'translateX(-50%)',zIndex:9999,display:'flex',justifyContent:'center',alignItems:'center',gap:'0.5rem'}}>
        {[
          {href:'#historia',icon:'◈',label:'Historia'},
          {href:'#favoritas',icon:'✦',label:'Preferidas'},
          {href:'#carta',icon:'◎',label:'Carta'},
          {href:'#contacto',icon:'◉',label:'Contacto'},
          {href:'https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20una%20tarta',icon:'✉',label:'Pedir',ext:true},
        ].map(item=>(
          <a key={item.href} href={item.href} target={item.ext?'_blank':undefined} rel={item.ext?'noopener noreferrer':undefined} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'0.2rem',textDecoration:'none',background:item.ext?'#1B3A5C':'rgba(27,58,92,0.75)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',border:'1px solid rgba(27,58,92,0.6)',borderRadius:'2rem',padding:'0.5rem 0.8rem 0.45rem',minWidth:'3.2rem',boxShadow:'0 4px 20px rgba(0,0,0,0.3)'}}>
            <span style={{fontSize:'1rem',color:'#F8F6F2',lineHeight:1}}>{item.icon}</span>
            <span style={{fontSize:'0.5rem',letterSpacing:'0.06em',textTransform:'uppercase',fontFamily:"'Jost',sans-serif",fontWeight:500,color:'rgba(248,246,242,0.8)'}}>{item.label}</span>
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
