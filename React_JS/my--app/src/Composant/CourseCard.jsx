const CourseCard = ({ title, instructor, duration, isEnrolled, level }) => {
  const cardBorderColor = isEnrolled ? "#38a169" : "#718096";

  // Couleur du badge de niveau
  const getLevelColor = (lvl) => {
    if (lvl === "Beginner") return { bg: "#ebf8ff", text: "#2b6cb0" };
    if (lvl === "Intermediate") return { bg: "#fef3c7", text: "#92400e" };
    if (lvl === "Advanced") return { bg: "#fff5f5", text: "#c53030" };
    return { bg: "#f7fafc", text: "#4a5568" };
  };

  const levelStyle = getLevelColor(level);

  return (
    <div
      style={{
        ...styles.card,
        borderLeft: `4px solid ${cardBorderColor}`,
      }}
    >
      {/* titre en majuscule*/}
      <h2 style={styles.courseTitle}>{title.toUpperCase()}</h2>

      {/* tache optionnel badge de niveau*/}
      {level && (
        <span
          style={{
            ...styles.levelBadge,
            backgroundColor: levelStyle.bg,
            color: levelStyle.text,
          }}
        >
          {level}
        </span>
      )}

      <div style={styles.infoBlock}>
        <p style={styles.infoText}>
          <span style={styles.label}>Instructeur :</span> {instructor}
        </p>
        <p style={styles.infoText}>
          <span style={styles.label}>Durée :</span> {duration}
        </p>
      </div>

      {/* LOGIQUE CONDITIONNELLE : isEnrolled true ou false */}
      <div
        style={{
          ...styles.statusBadge,
          backgroundColor: isEnrolled ? "#c6f6d5" : "#fed7d7",
          color: isEnrolled ? "#276749" : "#9b2335",
        }}
      >
        {isEnrolled ? "✓ Enrolled" : "✗ Not Enrolled"}
      </div>
    </div>
  );
};

{
  /* styles(optionnel pour le devoir mais pour rendre le composant plus joli) */
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    transition: "transform 0.2s",
  },
  courseTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: 0,
    letterSpacing: "0.05em",
  },
  levelBadge: {
    display: "inline-block",
    padding: "2px 10px",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: "600",
    width: "fit-content",
  },
  infoBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  infoText: {
    margin: 0,
    fontSize: "0.9rem",
    color: "#4a5568",
  },
  label: {
    fontWeight: "600",
    color: "#2d3748",
  },
  statusBadge: {
    padding: "0.4rem 0.75rem",
    borderRadius: "8px",
    fontSize: "0.85rem",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "0.25rem",
  },
};

export default CourseCard;
