"use client";
type props = {
    movies: movies;
};
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function Movies({ movies }: props) {
    console.log(movies);
    return (
        <div className="h-screen m-10">
            <h1 className="text-3xl my-5 text-amber-400 font-extrabold">
                Upcoming <span className="text-white">movies</span>
            </h1>
            <Splide
                options={{
                    arrows: false,
                    mediaQuery: "max",
                    perPage: 3,
                    breakpoints: {
                        640: {
                            perPage: 1,
                        },
                    },
                }}
            >
                {movies.results.map((movie) => {
                    return (
                        <SplideSlide key={movie.id}>
                            <div className="relative cursor-pointer">
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}
                                    `}
                                    alt=""
                                    className="w-full h-full"
                                />
                                <div
                                    className={`absolute  hover:bg-black/60 duration-200 delay-200 w-full h-full  top-0`}
                                ></div>
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}
