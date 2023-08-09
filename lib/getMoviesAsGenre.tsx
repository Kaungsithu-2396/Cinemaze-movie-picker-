export default async function getMoviesAsGenre(genreId: number, page: number) {
    const response = await fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=${genreId}&page=${page}`);
    if (!response.ok) undefined;
    return response.json();
}
