"use client";
type props = {
    movies: movies;
};
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function Movies({ movies }: props) {
    return (
        <div className=" h-screen m-10">
            <h1 className="text-4xl my-10 text-amber-400 font-extrabold">
                Upcoming <span className="text-white">movies</span>
            </h1>
            <Splide
                options={{
                    arrows: true,
                    mediaQuery: "max",
                    pagination: false,
                    gap: 10,
                    keyboard: "global",
                    type: "loop",
                    perPage: 3,
                    autoplay: true,
                    pauseOnHover: true,
                    breakpoints: {
                        480: {
                            arrows: true,
                            gap: 20,
                            pagination: false,
                            // arrows: false,
                            // pagination: true,
                            perPage: 2,
                        },
                        768: {
                            arrows: false,
                            gap: 30,
                            perPage: 3,
                        },
                    },
                }}
            >
                {movies.results.map((movie) => {
                    return (
                        <SplideSlide key={movie.id}>
                            <div className="relative  cursor-pointer">
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}
                                    `}
                                    alt=""
                                    className="w-full h-[20rem] object-cover rounded-md"
                                />
                                <div
                                    className={`absolute hover:bg-black/60 bg-black/20 duration-200 delay-200 w-full h-full  top-0`}
                                >
                                    <h1 className="text-center invisible lg:visible  px-4 h-full flex items-center justify-center text-xl opacity-0 font-extrabold text-amber-400 hover:opacity-100 duration-300 delay-300">
                                        {movie.title}
                                        {movie.title !== movie.original_title &&
                                            "(" + movie.original_title + ")"}
                                    </h1>
                                </div>
                            </div>
                            <div className="lg:hidden block my-4">
                                <h1 className="text-center md:text-xl lg:text-2xl text-sm">
                                    {movie.title}
                                </h1>
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}
