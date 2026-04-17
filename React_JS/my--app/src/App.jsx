// BONUS : on peut aussi passer un objet complet comme prop.
// C'est pratique quand les données viennent d'une API (un objet JSON).
import Header from "./Composant/header";
import CourseCard from "./Composant/CourseCard";
const coursesData = [
  {
    id: 1,
    title: "HTML & CSS Fondamentaux",
    instructor: "Sarah Mbeki",
    duration: "6 semaines",
    isEnrolled: true,
    level: "Beginner",
  },
  {
    id: 2,
    title: "JavaScript ES6+",
    instructor: "Jean-Pierre Nkolo",
    duration: "8 semaines",
    isEnrolled: true,
    level: "Intermediate",
  },
  {
    id: 3,
    title: "React & Hooks",
    instructor: "Amina Touré",
    duration: "10 semaines",
    isEnrolled: false,
    level: "Intermediate",
  },
];

function App() {
  return (
    <div style={styles.appContainer}>
      {/* Composant Header avec une prop platformName */}
      <Header platformName="Localhost Academy" />

      <main style={styles.main}>
        <h2 style={styles.sectionTitle}>Tous les cours disponibles</h2>

        {/* On affiche les cours en itérant sur le tableau avec .map().
            Pour chaque objet cours, on passe ses propriétés comme props
            à CourseCard via le spread operator {...course}.
            C'est l'équivalent d'écrire title={course.title} instructor={...} etc. */}
        <div style={styles.grid}>
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              duration={course.duration}
              isEnrolled={course.isEnrolled}
              level={course.level}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

const styles = {
  appContainer: {
    minHeight: "100vh",
    backgroundColor: "#f7f8fc",
    fontFamily: "'Segoe UI', sans-serif",
  },
  main: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 1.5rem 3rem",
  },
  sectionTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#2d3748",
    marginBottom: "1.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
};

export default App;
