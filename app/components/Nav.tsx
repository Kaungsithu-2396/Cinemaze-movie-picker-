import NavList from "./NavList";
export default function Nav() {
    return (
        <>
            <nav className="  bg-[#0D0D0D]  gap-5 w-[20%]  ">
                <h1 className="text-3xl bg-black text-center cursor-pointer p-8">
                    <span className="text-amber-400">Movie</span>Picker
                </h1>

                <div className="mt-5 sticky top-8">
                    <h1 className="text-xl px-5">Discover</h1>
                    <ul className="  flex flex-col cursor-pointer w-full py-2 px-5  text-lg  ">
                        <NavList title="Home" />
                        <NavList title="Popular" />
                        <NavList title="Movies" />
                        <NavList title="Series" />
                    </ul>

                    <h1 className="text-2xl px-5">Categories</h1>
                </div>
            </nav>
        </>
    );
}
