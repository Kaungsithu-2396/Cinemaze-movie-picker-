"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function UpComingMovies() {
    return (
        <div className="h-screen m-10">
            <h1 className="text-3xl text-amber-400 font-extrabold">
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
                <SplideSlide>
                    <div className="relative cursor-pointer">
                        <img
                            src="https://image.tmdb.org/t/p/original//tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
                            alt=""
                        />
                        <div
                            className={`absolute  hover:bg-black/60 duration-200 delay-200 w-full h-full  top-0`}
                        ></div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="relative cursor-pointer">
                        <img
                            src="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/B3B1/production/_130510064_conor_gallagher_getty2.jpg"
                            alt=""
                            className="w-full h-full"
                        />
                        <div
                            className={`absolute  hover:bg-black/60 duration-200 delay-200 w-full h-full  top-0`}
                        ></div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="relative cursor-pointer">
                        <img
                            src="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/B3B1/production/_130510064_conor_gallagher_getty2.jpg"
                            alt=""
                            className="w-full h-full"
                        />
                        <div
                            className={`absolute  hover:bg-black/60 duration-200 delay-200 w-full h-full  top-0`}
                        ></div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="relative cursor-pointer">
                        <img
                            src="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/B3B1/production/_130510064_conor_gallagher_getty2.jpg"
                            alt=""
                            className="w-full h-full"
                        />
                        <div
                            className={`absolute  hover:bg-black/60 duration-200 delay-200 w-full h-full  top-0`}
                        ></div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
}
