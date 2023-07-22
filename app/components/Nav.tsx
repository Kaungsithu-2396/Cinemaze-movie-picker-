import NavList from "./NavList";
import Search from "./Search";

export default function Nav() {
    return (
        <nav className=" py-5 flex justify-between items-center">
            <h1 className="text-3xl text-zinc-700 font-bold"><span className=" text-amber-400">Movie</span>Picks</h1>
            <div className="flex gap-x-8 text-2xl cursor-pointer">
                <NavList title="Home" />
                <NavList title="Movies" />
                <NavList title="Series" />
            </div>
            <div className="">
                <Search />
            </div>
        </nav>
    );
}
