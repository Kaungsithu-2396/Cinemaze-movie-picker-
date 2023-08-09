import React from "react";
import Link from "next/link";
type Props = {
    src: string;
    name: string;
    to: string;
};

export default function MovieCard({ src, name, to }: Props) {
    return (
        <>
            <Link href={to}>
                <div className="flex flex-col  justify-center items-center">
                    <div className="relative cursor-pointer hover:scale-105 duration-200 delay-300">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${src}`}
                            alt=""
                            className="lg:h-[30rem] h-[15rem] w-full object-cover rounded-md "
                        />
                        <div className="absolute w-full h-full top-0 bg-black/40 z-40"></div>
                    </div>
                    <div className=" mt-4">
                        <h1 className=" text-2xl text-white/80">{name}</h1>
                    </div>
                </div>
            </Link>
        </>
    );
}
