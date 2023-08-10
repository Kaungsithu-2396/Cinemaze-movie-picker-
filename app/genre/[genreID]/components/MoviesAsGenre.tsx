"use client";
type Props = {
    relatedGenreMovies: movies;
    genreID: number;
};
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import MovieCard from "./MovieCard";
export default function MoviesAsGenre({ relatedGenreMovies, genreID }: Props) {
    //access the genre and pageName via url to operate the dynamic page function
    const searchParams = useSearchParams();
    const genreName = searchParams.get("name");
    const pageNum = searchParams.get("page");
    const currentRoute = usePathname();
    const [currentPage, setCurrentPage] = useState(Number(pageNum));

    function changeURLAsPage(page: number) {
        return `${currentRoute}?name=${genreName}&page=${currentPage + page}`;
    }

    const pageIncHandler = () => {
        setCurrentPage(currentPage + 1);
    };
    const pageDecHandler = () => {
        currentPage > 0 && setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <div className="">
                <h1 className="text-4xl uppercase font-extrabold text-amber-400">
                    {genreName} <br />{" "}
                    <span className="text-2xl text-white/60">movies</span>
                </h1>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3  grid-cols-2 gap-10 px-5 mt-5">
                {relatedGenreMovies.results.map((el) => {
                    return (
                        <React.Fragment key={el.id}>
                            <MovieCard
                                src={el.poster_path}
                                name={el.original_title}
                                to={`/detail/${el.id}`}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
            <div className="flex justify-between items-center my-9 mx-5">
                {currentPage > 1 ? (
                    <Link href={changeURLAsPage(-1)}>
                        <button
                            className={`border-2 font-extrabold border-white px-5 py-2 rounded-md  hover:bg-amber-400 duration-300 delay-300 hover:text-black hover:scale-105 md:text-2xl
                         `}
                            onClick={pageDecHandler}
                        >
                            page{" "}
                            <span className="md:text-3xl">
                                {currentPage - 1}
                            </span>
                        </button>
                    </Link>
                ) : (
                    <div className=""></div>
                )}

                <div className="">
                    <h1 className="md:text-2xl">
                        <span className="text-amber-400 text-4xl">
                            {currentPage}
                        </span>
                        /500
                    </h1>
                </div>
                {currentPage < 500 ? (
                    <Link href={changeURLAsPage(1)}>
                        <button
                            className="border-2 md:text-2xl border-white px-5 py-2 rounded-md  hover:bg-amber-400 duration-300 delay-300 hover:text-black hover:scale-105"
                            onClick={pageIncHandler}
                        >
                            page{" "}
                            <span className="md:text-3xl ">
                                {currentPage + 1}
                            </span>
                        </button>
                    </Link>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    );
}
