export default function Sedes() {
  const sedes = [
    {
      nombre: "Sede Coaviconsa",
      direccion: "Calle 103 No 13A-16 Bucaramanga",
      imagen: "/src/assets/fotico.jpg",
    },
    {
      nombre: "Sede la 27",
      direccion: "Calle 45 No 27-15 Bucaramanga",
      imagen: "/src/assets/fotico.jpg",
    },
    {
      nombre: "Sede Carrizal",
      direccion: "Calle 105 No 24-111 Bucaramanga",
      imagen: "/src/assets/fotico.jpg",
    },
    {
      nombre: "Sede Porvenir",
      direccion: "Calle 45 No 27-15 Bucaramanga",
      imagen: "/src/assets/fotico.jpg",
    },
    {
      nombre: "Sede Provenza",
      direccion: "Calle 105 No 24-111 Bucaramanga",
      imagen: "/src/assets/fotico.jpg",
    },
    {
      nombre: "Sede Campo hermoso",
      direccion: "Calle 45 No 27-15 Bucaramanga",
      imagen: "/src/assets/fotico.jpg",
    },
    {
      nombre: "Sede Oasis",
      direccion: "Calle 45 No 27-15 Bucaramanga",
      imagen: "/src/assets/fotico.jpg",
    },
  ];

  return (
    <section className="cards" id="sedes">
      {sedes.map((sede, index) => (
        <div className="card" key={index}>
          <img src={sede.imagen} alt="imagen del sitio" />
          <h3>{sede.nombre}</h3>
          <p>Ubicada en: {sede.direccion}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              sede.direccion
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Ver en Maps</button>
          </a>
        </div>
      ))}
    </section>
  );
}
