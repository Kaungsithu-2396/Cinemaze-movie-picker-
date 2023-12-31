import DetailSection from "./components/DetailSection";
import getMovieTrailerKey from "@/lib/getMovieTrailerKey";
import getDetails from "@/lib/getDetails";
import getSimilarMovies from "@/lib/getSimilarMovies";
import { Metadata } from "next";
import SimilarMovies from "./components/SimilarMovies";

type Props = {
    params: {
        movieId: string;
    };
};

export async function generateMetadata({ params: { movieId } }: Props) {
    const movieDetail: Promise<movieDetail> = getDetails(movieId);
    const detail = await movieDetail;
    return {
        title: detail.original_title,
        description: `page of ${detail.original_title}`,
    };
}

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
        <section className="flex-1  h-screen   overflow-y-scroll  ">
            <section className="">
                <DetailSection keyOfMovie={key} detail={detail} />
            </section>
            <section>
                <SimilarMovies similarMovies={similarMoviesData} />
            </section>
        </section>
    );
}
