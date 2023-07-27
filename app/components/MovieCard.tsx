import Link from "next/link";
import React from "react";

type Props = {
    src: string;
    title: string;
    overview: string;
    detail: string;
};

export default function MovieCard({ src, title, overview, detail }: Props) {
    return (
        <>
            <div className="relative h-[40rem] 2xl:h-[50rem] xl:h-[30rem] lg:h-[25rem] ">
                <img
                    src={`https://image.tmdb.org/t/p/original/${src}
                    `}
                    alt=""
                    className=" rounded-lg object-cover w-full h-full  "
                />
                <div className="absolute top-0 bg-black/60 h-full w-full "></div>
                <div className="absolute xl:top-[50%] lg:top-[30%] top-[30%] lg:left-11 p-5">
                    <h1 className="2xl:text-4xl text-3xl 2xl:my-3  font-extrabold ">
                        {title}
                    </h1>
                    <h2 className="xl:w-[60%] lg:w-[80%] my-4 font-bold text-white/70  xl:text-sm 2xl:text-xl">
                        {overview.slice(0, 180)}....
                    </h2>
                    <Link href={detail} className=" lg:mr-5 mr-2">
                        <button className=" bg-amber-400 hover:scale-110 duration-300 delay-200 text-black px-10 rounded-md py-2">
                            Watch Trailer
                        </button>
                    </Link>
                    <Link href={detail}>
                        <button className=" bg-white hover:scale-110 duration-300 delay-200 text-black px-10 rounded-md py-2">
                            Detail
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
