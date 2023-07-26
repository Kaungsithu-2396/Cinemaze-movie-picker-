"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
export default function HeroSection() {
    return (
        <section className="w-[94%] m-auto">
            <Splide
                aria-label="My Favorite Images"
                options={{
                    autoplay: true,
                    interval: 2000,
                    type: "loop",
                }}
            >
                <SplideSlide>
                    <div className="relative ">
                        <img
                            src="https://image.tmdb.org/t/p/original//yF1eOkaYvwiORauRCPWznV9xVvi.jpg
                    "
                            alt=""
                            className=" rounded-lg"
                        />
                        <div className="absolute top-0 bg-black/40 h-full w-full "></div>
                        <div className="absolute top-[50%] left-5 p-5">
                            <h1 className="text-4xl my-3">Iron Man</h1>
                            <h2 className="w-[70%] my-4">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ullam ad ut minima!
                            </h2>
                            <button className=" bg-amber-400 hover:scale-110 duration-300 delay-200 text-black px-5 rounded-md py-2">
                                Detail
                            </button>
                        </div>
                    </div>
                </SplideSlide>{" "}
                <SplideSlide>
                    <div className="relative ">
                        <img
                            src="https://image.tmdb.org/t/p/original//yF1eOkaYvwiORauRCPWznV9xVvi.jpg
                    "
                            alt=""
                            className=" rounded-lg"
                        />
                        <div className="absolute top-0 bg-black/40 h-full w-full "></div>
                        <div className="absolute top-[50%] left-5 p-5">
                            <h1 className="text-4xl my-3">Iron Man</h1>
                            <h2 className="w-[70%] my-4">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ullam ad ut minima!
                            </h2>
                            <button className=" bg-amber-400 hover:scale-110 duration-300 delay-200 text-black px-5 rounded-md py-2">
                                Detail
                            </button>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="relative ">
                        <img
                            src="https://image.tmdb.org/t/p/original//yF1eOkaYvwiORauRCPWznV9xVvi.jpg
                    "
                            alt=""
                            className=" rounded-lg"
                        />
                        <div className="absolute top-0 bg-black/40 h-full w-full "></div>
                        <div className="absolute top-[50%] left-5 p-5">
                            <h1 className="text-4xl my-3">Iron Man</h1>
                            <h2 className="w-[70%] my-4">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ullam ad ut minima!
                            </h2>
                            <button className=" bg-amber-400 hover:scale-110 duration-300 delay-200 text-black px-5 rounded-md py-2">
                                Detail
                            </button>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </section>
    );
}
