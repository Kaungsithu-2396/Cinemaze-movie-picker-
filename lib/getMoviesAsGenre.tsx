export default async function getMoviesAsGenre() {
    const response = await fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`);
    if (!response.ok) undefined;
    return response.json();
}
