"use client";
type props = {
    popularMovies: movies;
};
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieCard from "./MovieCard";
import "@splidejs/react-splide/css";
export default function PopularDataRender({ popularMovies }: props) {
    return (
        <section className="lg:w-[94%] w-screen h-screen m-auto   ">
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
                {/* <SplideSlide>
                    <MovieCard
                        title="Barbie"
                        src="/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg"
                        overview="Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans."
                        detail="/"
                    />
                </SplideSlide>
                <SplideSlide>
                    <MovieCard
                        title="Iron Men"
                        src="/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg"
                        overview="Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans."
                        detail="/"
                    />
                </SplideSlide>
                <SplideSlide>
                    <MovieCard
                        title="Iron Men"
                        src="/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
                        overview="Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans."
                        detail="/"
                    />
                </SplideSlide> */}
            </Splide>
        </section>
    );
}
