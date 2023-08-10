import Link from "next/link";

type Props = {
    src: string;
    movieName: string;
    time: string;
    to: number;
};

export default function SearchResult({ src, movieName, time, to }: Props) {
    return (
        <>
            <Link href={`detail/${to}`}>
                <div className="grid grid-cols-2 p-5">
                    <img
                        src={`https://image.tmdb.org/t/p/original${src}`}
                        className=" lg:h-[6rem] lg:w-[7rem] h-[5rem] w-[5rem]  rounded-md object-cover m-auto"
                        alt=""
                    />
                    <div className="">
                        <h1 className="lg:text-2xl text-xl">
                            {movieName.slice(0, 10)}...
                        </h1>
                        <h2 className="text-black/60 text-lg">
                            {time.slice(0, 4)}
                        </h2>
                    </div>
                </div>
                <hr />
            </Link>
        </>
    );
}
