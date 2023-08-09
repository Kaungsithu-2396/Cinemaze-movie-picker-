"use client";
type props = {
    popularMovies: movies;
};
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieCard from "./MovieCard";

import "@splidejs/react-splide/css";
export default async function PopularSection({ popularMovies }: props) {
    return (
        <section className="lg:w-[95%]  w-screen  m-auto   ">
            <Splide
                aria-label="My Favorite Images"
                options={{
                    // autoplay: true,
                    interval: 2000,
                    type: "loop",
                    arrows: false,
                    pauseOnHover: true,
                }}
            >
                {popularMovies.results.map((movie) => {
                    return (
                        <SplideSlide key={movie.id}>
                            <MovieCard
                                id={movie.id}
                                title={movie.original_title}
                                src={movie.backdrop_path}
                                overview={movie.overview}
                                detail={`detail/${movie.id}`}
                            />
                        </SplideSlide>
                    );
                })}
            </Splide>
        </section>
    );
}
