import Link from "next/link";
import getMovieTrailerKey from "@/lib/getMovieTrailerKey";

type Props = {
    id: number;
    src: string;
    title: string;
    overview: string;
    detail: string;
};

export default async function MovieCard({
    id,
    src,
    title,
    overview,
    detail,
}: Props) {
    return (
        <>
            <div className="relative h-screen 2xl:h-[50rem] xl:h-[30rem] lg:h-[25rem] ">
                <img
                    src={`https://image.tmdb.org/t/p/original/${src}
                    `}
                    alt={title}
                    className=" md:rounded-lg object-cover w-full h-full  "
                />

                <div className="absolute top-0 bg-black/60 h-full w-full "></div>
                <div className="absolute xl:top-[50%] lg:top-[30%] top-[40%]  lg:left-11 p-5">
                    <h1 className="2xl:text-4xl text-3xl 2xl:my-3 md:text-4xl  md:text-left  font-extrabold ">
                        {title}
                    </h1>

                    <h2 className="xl:w-[60%] lg:w-[80%] md:w-[60%] my-4 font-bold text-white/70 md:text-2xl  xl:text-sm 2xl:text-xl">
                        {overview.slice(0, 120)}....
                    </h2>
                    <Link
                        href={`${detail}`}
                        className=" lg:mr-5 mr-2 w-full lg:w-auto lg:block"
                    >
                        <button className=" md:text-2xl bg-amber-400 border-2  hover:scale-110 duration-300 delay-200 text-black px-10 rounded-md py-2">
                            Detail
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
