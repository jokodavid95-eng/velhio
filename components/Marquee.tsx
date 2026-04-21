const ITEMS = [
  'Tartas artesanales',
  'Hechas a mano',
  'Una cucharada y no hay vuelta atrás',
  'Receta familiar desde Uruguay',
  'Madrid · Ciempozuelos',
  'Muy muy cremosas',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            <span className="dot"> ✦ </span>
          </span>
        ))}
      </div>
    </div>
  )
}
