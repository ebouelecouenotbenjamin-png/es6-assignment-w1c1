// Header.jsx
// Ce composant affiche le nom de la plateforme.

function Header({ platformName }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{platformName}</h1>
      <p style={styles.subtitle}>Vos cours, votre rythme.</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#1a1a2e",
    padding: "2rem",
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    color: "#e94560",
    fontSize: "2rem",
    margin: 0,
  },
  subtitle: {
    color: "#a0aec0",
    marginTop: "0.5rem",
    fontSize: "1rem",
  },
};

export default Header;
