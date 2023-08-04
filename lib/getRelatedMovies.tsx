export default async function getRelatedMovies(searchTerm: string) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${searchTerm}?api_key=${process.env.API_KEY}${process.env.Language}`
    );
    if (!response.ok) undefined;
    return response.json();
}
