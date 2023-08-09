import DetailSection from "./components/DetailSection";
import getMovieTrailerKey from "@/lib/getMovieTrailerKey";
import getDetails from "@/lib/getDetails";
import getSimilarMovies from "@/lib/getSimilarMovies";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Movies from "@/app/components/Movies";
import SimilarMovies from "./components/SimilarMovies";

type Props = {
    params: {
        movieId: string;
    };
};

export default async function page({ params: { movieId } }: Props) {
    const movie: Promise<movieTrailerKey> = getMovieTrailerKey(movieId);
    const movieDetail: Promise<movieDetail> = getDetails(movieId);
    const similarMovies: Promise<movies> = getSimilarMovies(movieId);
    const [movieData, detail, similarMoviesData] = await Promise.all([
        movie,
        movieDetail,
        similarMovies,
    ]); //so that no waterfall occurs
    const key = movieData?.results[0]?.key;

    return (
        <section className="flex-1  h-screen  overflow-y-scroll  ">
            <section>
                <DetailSection keyOfMovie={key} detail={detail} />
            </section>
            <section>
                <SimilarMovies similarMovies={similarMoviesData} />
            </section>
        </section>
    );
}
