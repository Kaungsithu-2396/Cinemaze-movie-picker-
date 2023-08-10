import Search from "@/app/components/Search";
import MoviesAsGenre from "./components/MoviesAsGenre";
import getMoviesAsGenre from "@/lib/getMoviesAsGenre";

export default async function page({
    params,
    searchParams,
}: {
    params: {
        genreID: number;
    };

    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const { page } = searchParams;
    const { genreID } = params;
    const movies: Promise<movies> = getMoviesAsGenre(genreID, Number(page));
    const relatedGenreMovies = await movies;
    

    return (
        <>
            <div className="flex-1 h-screen overflow-y-scroll   absolute lg:relative top-20 md:top-24  lg:top-0">
                <div className="hidden lg:block ">
                    <Search size={45} />
                </div>
                <section className="m-5">
                    <MoviesAsGenre
                        relatedGenreMovies={relatedGenreMovies}
                        genreID={genreID}
                    />
                </section>
            </div>
        </>
    );
}
