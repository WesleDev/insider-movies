// Gerar lista de filmes
export function getListMovies(size, movies) {
  let popularMovies = [];

  for (let i = 0, l = size; i < l; i++) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}

// Gerar numero aleatorio com base no tamanho da lista de filmes
export function randomBanner(movies) {
  return Math.floor(Math.random() * movies.length);
}
