import getPopularMovies from "@/lib/getRelatedMovies";
import PopularDataRender from "./PopularRender";

export default async function HeroSection() {
    const getMovies: Promise<movies> = getPopularMovies("popular");
    const movies = await getMovies;
    return <PopularDataRender popularMovies={movies} />;
}
