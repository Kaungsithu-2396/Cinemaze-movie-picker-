import getRelatedMovies from "@/lib/getRelatedMovies";
import Movies from "./Movies";
export default async function UpComingMovieSection() {
    const upcomingMovies: Promise<movies> = getRelatedMovies("upcoming");
    const movies = await upcomingMovies;
    return (
        <Movies movies={movies} type={"Upcoming Movies"} isCarousel={false} />
    );
}
