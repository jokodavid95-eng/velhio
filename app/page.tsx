import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Historia from '@/components/Historia'
import Origen from '@/components/Origen'
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
      <Historia />
      <Origen />
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
