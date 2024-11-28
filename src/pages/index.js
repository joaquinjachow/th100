export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        🚧 En Construcción 🚧
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#555",
          marginBottom: "40px",
        }}
      >
        Estamos trabajando duro para traerte algo increíble. ¡Vuelve pronto!
      </p>
    </div>
  );
}