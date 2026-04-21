import { useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';

/**
 * Application "Cinema Explorer"
 *
 * ANALYSE CRITIQUE:
 *
 * 1. POURQUOI UTILISER .map() AU LIEU DE RÉPÉTER LE CODE?
 *    - Sans .map(), on devrait écrire manuellement chaque film (code dupliqué):
 *      <MovieCard movie={films[0]} key={0} />
 *      <MovieCard movie={films[1]} key={1} />
 *      <MovieCard movie={films[2]} key={2} />
 *      ... (répétition sans fin)
 *    - Avec .map(), on transforme automaquement chaque élément du tableau
 *
 * 2. POURQUOI LA KEY EST IMPORTANTE EN REACT?
 *    - React doit identifier quel élément a changé, a été ajouté ou supprimé
 *    - Sans key unique, React pourrait re-rendre le mauvais élément
 *    - Avec key={movie.id}, React sait que "cet objet spécifique" correspond à "cette clé"
 *    - Les keys améliorent les performances et évitent les bugs subtils
 *    - ATTENTION: Ne JAMAIS utiliser l'index du tableau comme key!
 *      Pourquoi? Si la liste est triée/filtrée, les indices changent et React se perd
 * 3. POURQUOI FILTRER LES DONNÉES AVANT DE LES AFFICHER?
 *    - Logiquement, c'est plus efficace: films s'affichent seulement s'ils correspondent au filtre
 */

function App() {
  const films = [
    {
      id: 1,
      title: 'The Matrix',
      genre: 'Action',
      year: 1999,
      rating: 8.7,
      isTrending: true,
    },
    {
      id: 2,
      title: 'Inception',
      genre: 'Sci-Fi',
      year: 2010,
      rating: 8.8,
      isTrending: true,
    },
    {
      id: 3,
      title: 'The Dark Knight',
      genre: 'Action',
      year: 2008,
      rating: 9.0,
      isTrending: false,
    },
    {
      id: 4,
      title: 'Interstellar',
      genre: 'Sci-Fi',
      year: 2014,
      rating: 8.6,
      isTrending: true,
    },
    {
      id: 5,
      title: 'Titanic',
      genre: 'Drama',
      year: 1997,
      rating: 7.8,
      isTrending: false,
    },
  ];

  const [genreSelectionne, setGenreSelectionne] = useState('All');

  // Extraire les genres uniques du tableau de films
  const genres = ['All', ...new Set(films.map(film => film.genre))];

  // Filtrer les films selon le genre sélectionné
  // Si 'All' est sélectionné, afficher tous les films
  // Sinon, afficher uniquement les films correspondant au genre
  const filmsFiltrés = genreSelectionne === 'All'
    ? films
    : films.filter(film => film.genre === genreSelectionne);

  // Tri par année (bonus): du plus récent au plus ancien
  const filmsTriés = [...filmsFiltrés].sort((a, b) => b.year - a.year);

  return (
    <div className="app-container">
      {/* En-tête */}
      <header className="header">
        <h1>Cinema Explorer</h1>
        <p className="subtitle">Découvrez des films exceptionnels avec logique dynamique</p>
      </header>

      {/* Filtres */}
      <section className="filters-section">
        <h2>Filtrer par Genre</h2>
        {/* Créer un bouton pour chaque genre */}
        {/* Utiliser .map() pour générer les boutons dynamiquement */}
        <div className="filter-buttons">
          {genres.map((genre) => (
            <button
              key={genre}
              className={`filter-btn ${genreSelectionne === genre ? 'active' : ''}`}
              onClick={() => setGenreSelectionne(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Section des films */}
      <section className="movies-section">
        <h2>Films {genreSelectionne !== 'All' && `- ${genreSelectionne}`}</h2>

        {/* Gestion du cas vide: Si aucun film ne correspond au filtre */}
        {filmsTriés.length === 0 ? (
          <div className="empty-state">
            <p>Aucun film trouvé pour ce genre.</p>
            <p>Essayez un autre genre ou réinitialisez les filtres.</p>
          </div>
        ) : (
          <>
            {/* Affichage avec .map() */}
            {/* Les films sont affichés triés par année (bonus) */}
            <div className="movies-grid">
              {filmsTriés.map((film) => (
                <MovieCard
                  key={film.id}
                  movie={film}
                />
              ))}
            </div>

            {/* Afficher le nombre de films */}
            <p className="movie-count">
              Total: <strong>{filmsTriés.length}</strong> film(s)
            </p>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
