export default function Sedes() {
  const sedes = [
    {
      nombre: "Sede Provenza",
      direccion: "Calle 105 No 24-111 Bucaramanga",
    },
    {
      nombre: "Sede Cabecera",
      direccion: "Calle 45 No 27-15 Bucaramanga",
    },
    {
      nombre: "Sede Provenza",
      direccion: "Calle 105 No 24-111 Bucaramanga",
    },
    {
      nombre: "Sede Cabecera",
      direccion: "Calle 45 No 27-15 Bucaramanga",
    },
    {
      nombre: "Sede Provenza",
      direccion: "Calle 105 No 24-111 Bucaramanga",
    },
    {
      nombre: "Sede Cabecera",
      direccion: "Calle 45 No 27-15 Bucaramanga",
    },
    {
      nombre: "Sede Cabecera",
      direccion: "Calle 45 No 27-15 Bucaramanga",
    },
  ];

  return (
    <section className="cards" id="sedes">
      {sedes.map((sede, index) => (
        <div className="card" key={index}>
          <h3>{sede.nombre}</h3>
          <p>{sede.direccion}</p>
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
