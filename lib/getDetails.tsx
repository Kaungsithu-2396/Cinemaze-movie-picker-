export default async function getDetails(movieId: string) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
    );
    if (!response.ok) undefined;
    return response.json();
}
