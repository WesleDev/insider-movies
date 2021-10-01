import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar filmes salvos
export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key);

  let moviesSave = JSON.parse(myMovies) || [];
  return moviesSave;
}

// Salvar filme
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key);

  // Se tiver filme com mesmo ID ou dublicado preciamos ignorar
  const hasMovie = moviesStored.some((item) => item.id === newMovie.id);

  if (hasMovie) {
    console.log('FILME JA EXISTE');
    return;
  }

  moviesStored.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log('FILME SALVO');
}

// Deletar filme
export async function deleteMovie(id) {
  let moviesStored = await getMoviesSave('@primereact');
  let myMovies = moviesStored.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies));
  console.log('FILME DELETADO');
  return myMovies;
}

// Filtrar filme se ja está salvo
export async function hasMovie(movie) {
  let moviesStored = await getMoviesSave('@primereact');

  const hasMovie = moviesStored.find((item) => item.id === movie.id);

  if (hasMovie) {
    return true;
  }

  return false;
}
