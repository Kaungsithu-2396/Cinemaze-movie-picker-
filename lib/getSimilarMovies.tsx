export default async function getSimilarMovies(id: string) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}&language=en-US`
    );
    if (!response.ok) undefined;
    return response.json();
}
