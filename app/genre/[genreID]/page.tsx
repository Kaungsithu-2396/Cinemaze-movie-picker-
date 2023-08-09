import Search from "@/app/components/Search";
import MovieCard from "./components/MovieCard";

type Props = {
    params: {
        genreID: number;
    };
};

export default function page({ params: { genreID } }: Props) {
    return (
        <>
            <div className="flex-1   absolute lg:relative top-20 md:top-24  lg:top-0">
                <div className="hidden lg:block">
                    <Search size={60} />
                </div>
                <section className="m-5">
                    <div className="">
                        <h1 className="text-4xl uppercase font-extrabold">
                            Popular <br />{" "}
                            <span className="text-2xl text-white/60">
                                movies
                            </span>
                        </h1>
                    </div>
                    <div className="grid lg:grid-cols-4  grid-cols-2 gap-8 px-5 mt-5">
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard /> <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard /> <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard /> <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                    <div className="flex justify-between items-center my-9 mx-5">
                        <button className="border-2 border-white px-5 py-2 rounded-md  hover:bg-amber-400 duration-300 delay-300 hover:text-black hover:scale-105">
                            page 1
                        </button>
                        <div className="">
                            <h1>1/500</h1>
                        </div>
                        <button className="border-2 border-white px-5 py-2 rounded-md  hover:bg-amber-400 duration-300 delay-300 hover:text-black hover:scale-105">
                            page 1
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
