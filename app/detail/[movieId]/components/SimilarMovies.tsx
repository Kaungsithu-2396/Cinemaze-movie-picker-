type Props = {
    similarMovies: movies;
};
import Movies from "@/app/components/Movies";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function SimilarMovies({ similarMovies }: Props) {
    console.log(similarMovies);
    return (
        <>
            {similarMovies.results.length ? (
                <div className="">
                    <Movies
                        movies={similarMovies}
                        type="Similar Movies"
                        isCarousel={true}
                    />
                </div>
            ) : (
                <div className=" h-24 text-center my-5">
                    <h1 className="text-amber-400 text-4xl">
                        No similar Movies{" "}
                    </h1>
                </div>
            )}
        </>
    );
}
