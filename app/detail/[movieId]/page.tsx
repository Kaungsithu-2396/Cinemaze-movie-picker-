import React from "react";
import DetailSection from "./components/DetailSection";
import getMovieTrailerKey from "@/lib/getMovieTrailerKey";
import getDetails from "@/lib/getDetails";

type Props = {
    params: {
        movieId: string;
    };
};

export default async function page({ params: { movieId } }: Props) {
    const movie: Promise<movieTrailerKey> = getMovieTrailerKey(movieId);
    const movieDetail: Promise<movieDetail> = getDetails(movieId);
    const [movieData, detail] = await Promise.all([movie, movieDetail]); //so that no waterfall occurs
    const { key } = movieData.results[0];

    return (
        <section className="flex-1 h-screen mt-7">
            <section>
                <DetailSection keyOfMovie={key} detail={detail} />
            </section>
        </section>
    );
}
