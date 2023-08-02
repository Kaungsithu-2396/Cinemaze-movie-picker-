import getRelatedMovies from "@/lib/getRelatedMovies";
import Movies from "./Movies";
export default async function TopRatedMovies() {
    const topRatedMovies: Promise<movies> = getRelatedMovies("top_rated");
    const movies = await topRatedMovies;
    return <Movies movies={movies} type="TopRated Movies" />;
}
