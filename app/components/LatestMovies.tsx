import getRelatedMovies from "@/lib/getRelatedMovies";
import Movies from "./Movies";
export default async function LatestMovies() {
    const latestMovies: Promise<movies> = getRelatedMovies("now_playing");
    const movies = await latestMovies;
    return <Movies movies={movies} type={`Now Playing`} isCarousel={false} />;
}
