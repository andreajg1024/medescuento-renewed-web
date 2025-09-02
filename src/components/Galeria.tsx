const imagenes = import.meta.glob('@/assets/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });

export default function Galeria() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'center',
        padding: 24
      }}
    >
      {Object.values(imagenes).map((url, idx) => (
        <img
          key={idx}
          src={url as string}
          alt={`Imagen ${idx + 1}`}
          style={{
            width: 200,
            height: 150,
            objectFit: "cover",
            borderRadius: 8,
            boxShadow: "0 2px 8px #0002"
          }}
        />
      ))}
    </div>
  );
}