import React from "react";
import Link from "next/link";
type Props = {
    keyOfMovie: string;
    detail: movieDetail;
};

export default function DetailSection({ keyOfMovie, detail }: Props) {
    return (
        <>
            <div className="lg:h-screen h-[60rem]  relative">
                {detail.backdrop_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
                        alt=""
                        className="h-full w-full object-cover  "
                    />
                ) : (
                    ""
                )}

                <div className="absolute   h-full lg:bg-black/60 bg-black/40  top-0 w-full  ">
                    <div className="flex md:justify-evenly justify-center  px-5    flex-col md:flex-row md:items-center h-full ">
                        <div className="hidden md:block h-[20rem]">
                            {detail.poster_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
                                    alt=""
                                    className=" md:h-[23rem]  lg:h-[20rem] xl:h-[480px] xl:w-[20rem]   w-[30%] md:w-full  object-cover rounded-lg"
                                />
                            ) : (
                                <h1 className="border-2 border-white px-6 py-52">
                                    No Image Available
                                </h1>
                            )}
                        </div>
                        <div className=" relative top-10 lg:top-6 md:w-[40%] lg:w-[50%] xl:w-[36%] flex flex-col md:gap-5  lg:gap-3 gap-3">
                            <h1 className="lg:text-4xl md:text-3xl text-xl uppercase">
                                {detail.original_title}
                            </h1>
                            <h1 className="lg:text-3xl text-red-700 text-2xl uppercase">
                                {detail.adult && "18+"}
                            </h1>

                            <h2 className="lg:text-2xl text-lg text-amber-500">
                                {detail.vote_average &&
                                    `IMDB Voting ${detail.vote_average.toFixed(
                                        1
                                    )}`}
                            </h2>
                            <div className="">
                                <h3 className="text-2xl">The Genres</h3>
                                <div className="flex  flex-wrap gap-2 mt-4  ">
                                    {detail.genres.length ? (
                                        detail.genres.map((el) => {
                                            return (
                                                <h3
                                                    key={el.id}
                                                    className="  p-2 lg:px-4 lg:py-2 border-2 border-white rounded-md bg-amber-400  text-black font-bold"
                                                >
                                                    {el.name}
                                                </h3>
                                            );
                                        })
                                    ) : (
                                        <h1 className="text-white">
                                            No genre Shows
                                        </h1>
                                    )}
                                </div>
                            </div>
                            <div className=" mt-5 md:mt-10 lg:mt-2">
                                <h4 className="text-3xl ">Overview</h4>
                                <h4
                                    className={`text-white/80 mt-4  ${
                                        detail.overview.length > 100 &&
                                        "h-[100px]"
                                    }   overflow-y-scroll`}
                                >
                                    {detail.overview
                                        ? detail.overview
                                        : "No overview available"}
                                </h4>
                            </div>

                            <div className="flex gap-5 ">
                                {keyOfMovie ? (
                                    <Link
                                        href={`https://www.youtube.com/watch?v=${keyOfMovie}`}
                                        className=""
                                        target="_blank"
                                    >
                                        <button className="px-10 py-2 border-2 border-neutral-200 hover:scale-105 bg-amber-500 text-black rounded-md duration-300 delay-200 ">
                                            Trailer
                                        </button>
                                    </Link>
                                ) : (
                                    <button className="px-10 py-2 border-2 border-neutral-200 hover:scale-105 bg-amber-500 text-black rounded-md duration-300 delay-200 ">
                                        No Trailer
                                    </button>
                                )}
                                {!!detail.homepage ? (
                                    <Link
                                        href={`${detail.homepage}`}
                                        className=""
                                        target="_blank"
                                    >
                                        <button className="px-10 py-2 border-2 border-neutral-200 hover:scale-105 hover:text-amber-400 rounded-md duration-300 delay-200 ">
                                            Website
                                        </button>
                                    </Link>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
