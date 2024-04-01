// Fetch movies from API and render them as cards in the movie list
async function fetchAndRenderMovies() {
  // Fetch movies data from API
  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1');
  const data = await response.json();
  const movies = data.results;

  // Clear existing movie list
  const movieList = document.querySelector('.movie-list');
  movieList.innerHTML = '';

  // Render each movie as a card
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/original/${movie.poster_path || 'default.jpg'}" alt="${movie.title}">
      <h3>${movie.title || 'Movie Title'}</h3>
      <p>Vote Count: ${movie.vote_count || 'Vote Count'}</p>
      <p>Vote Average: ${movie.vote_average || 'Vote Average'}</p>
      <button class="favorite-btn">Favorite</button>
    `;
    movieList.appendChild(card);
  });
}

// Event listeners and other JavaScript functionality can be added here

// Initial fetch and render
fetchAndRenderMovies();
