import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Historia from '@/components/Historia'
import Favoritas from '@/components/Favoritas'
import Carta from '@/components/Carta'
import Especial from '@/components/Especial'
import Adaptadas from '@/components/Adaptadas'
import Resenas from '@/components/Resenas'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Historia />
      <Favoritas />
      <Carta />
      <Especial />
      <Adaptadas />
      <Resenas />
      <Contacto />
      <Footer />
    </main>
  )
}
