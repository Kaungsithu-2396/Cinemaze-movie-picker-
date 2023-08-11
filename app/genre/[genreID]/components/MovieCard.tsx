import React from "react";
import Link from "next/link";
type Props = {
    src: string;
    name: string;
    to: string;
    imdbVote: number;
};

export default function MovieCard({ src, name, to, imdbVote }: Props) {
    return (
        <>
            <Link href={to}>
                <div className="flex flex-col  justify-center items-center">
                    <div className="relative cursor-pointer hover:scale-105 duration-200 delay-300">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${src}`}
                            alt=""
                            className="lg:h-[30rem] md:h-[20rem] h-[15rem] w-full object-cover rounded-md "
                        />
                        <div className="absolute w-full h-full top-0 bg-black/40 hover:bg-transparent duration-200 delay-300 z-30"></div>
                        <div className="absolute left-0 top-0  rounded-md z-40    bg-[#404040]">
                            <h1 className="text-amber-400 p-5 font-extrabold ">
                                {imdbVote.toFixed(1)}
                            </h1>
                        </div>
                    </div>
                    <div className=" mt-4">
                        <h1 className=" text-2xl text-white/80">{name}</h1>
                    </div>
                </div>
            </Link>
        </>
    );
}
