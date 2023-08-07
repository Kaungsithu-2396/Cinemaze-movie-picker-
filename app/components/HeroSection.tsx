import getPopularMovies from "@/lib/getRelatedMovies";
import PopularSection from "./PopularSection";

export default async function HeroSection() {
    const getMovies: Promise<movies> = getPopularMovies("popular");
    const movies = await getMovies;

    return <PopularSection popularMovies={movies} />;
}
