import React from "react";

type Props = {};

export default function MovieCard({}: Props) {
    return (
        <>
            <div className="flex flex-col  justify-center items-center">
                <div className="relative cursor-pointer hover:scale-105 duration-200 delay-300">
                    <img
                        src={`https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg`}
                        alt=""
                        className="lg:h-[30rem] h-[15rem] w-full object-cover rounded-md "
                    />
                    <div className="absolute w-full h-full top-0 bg-black/40 z-40"></div>
                </div>
                <div className=" mt-4">
                    <h1 className="md:text-3xl text-2xl text-white/80">
                        mingalar par
                    </h1>
                </div>
            </div>
        </>
    );
}
