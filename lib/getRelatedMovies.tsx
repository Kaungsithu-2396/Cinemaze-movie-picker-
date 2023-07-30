export default async function getRelatedMovies(searchTerm: string) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${searchTerm}?api_key=418a76a85ac7586cda9a8a2a593d5487&language=en-US`
    );
    console.log(searchTerm);
    if (!response.ok) undefined;
    return response.json();
}
