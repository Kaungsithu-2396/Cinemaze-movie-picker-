export default async function getMoviesAsGenre(genreId:number) {
    const response = await fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}${process.env.Language}&with_genres=${genreId}`);
    if (!response.ok) undefined;
    return response.json();
}
