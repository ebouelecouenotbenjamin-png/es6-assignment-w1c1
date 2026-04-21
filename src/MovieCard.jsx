
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-header">
        <h3>{movie.title}</h3>
        <span className="year">({movie.year})</span>
      </div>

      <div className="movie-info">
        <p className="genre">Genre: <strong>{movie.genre}</strong></p>
        <p className="rating"> Rating: {movie.rating}/10</p>
      </div>

      <div className="badges">
        {/* Afficher "Trending" si isTrending est true */}
        {/* Logique Conditionnelle #1 */}
        {movie.isTrending && (
          <span className="badge badge-trending"> Trending</span>
        )}

        {/* Afficher "Top Rated" si rating > 8 */}
        {/* Logique Conditionnelle #2 */}
        {movie.rating > 8 && (
          <span className="badge badge-top-rated"> Top Rated</span>
        )}

        {/* Bonus: Afficher "Classic" si année < 2000 */}
        {/* Logique Conditionnelle #3 */}
        {movie.year < 2000 && (
          <span className="badge badge-classic">Classic</span>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
