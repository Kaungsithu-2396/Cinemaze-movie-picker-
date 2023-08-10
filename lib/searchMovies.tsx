export default async function searchMovies(searchTerm: string | " ") {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=J&api_key=${process.env.API_KEY}`
    );
    if (!response.ok) undefined;
    return response.json();
}
