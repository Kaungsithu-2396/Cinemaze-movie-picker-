import getMoviesGenre from "@/lib/getMoviesGenre";
import NavSection from "./NavSection";
export default async function Nav() {
    const categories = getMoviesGenre();
    const genres = await categories;
    return <NavSection genres={genres} />;
}
