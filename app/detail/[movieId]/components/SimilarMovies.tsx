type Props = {
    similarMovies: movies;
};
import Movies from "@/app/components/Movies";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function SimilarMovies({ similarMovies }: Props) {
    return (
        <>
            <Movies movies={similarMovies} type="Similar Movies" />
        </>
    );
}
