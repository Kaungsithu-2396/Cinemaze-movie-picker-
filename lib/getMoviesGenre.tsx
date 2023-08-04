export default async function getMoviesGenre() {
    const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}${process.env.Language}`
    );
    if (!response.ok) undefined;
    return response.json();
}
