"use client";
type props = {
    popularMovies: movies;
};
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieCard from "./MovieCard";
import "@splidejs/react-splide/css";
export default function PopularDataRender({ popularMovies }: props) {
    return (
        <section className="lg:w-[95%]  w-screen  m-auto   ">
            <Splide
                aria-label="My Favorite Images"
                options={{
                    autoplay: true,
                    interval: 2000,
                    type: "loop",
                    arrows: false,
                }}
            >
                {popularMovies.results.map((movie) => {
                    return (
                        <SplideSlide key={movie.id}>
                            <MovieCard
                                title={movie.original_title}
                                src={movie.backdrop_path}
                                overview={movie.overview}
                                detail="/"
                            />
                        </SplideSlide>
                    );
                })}
            </Splide>
        </section>
    );
}
