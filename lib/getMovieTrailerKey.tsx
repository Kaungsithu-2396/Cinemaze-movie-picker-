export default async function getMovieTrailerKey(id: string) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    if (!response.ok) undefined;
    return response.json();
}
