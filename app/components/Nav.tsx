import NavList from "./NavList";
export default function Nav() {
    return (
        <>
            <nav className="  bg-[#0D0D0D]  gap-5 w-[20%] h-screen ">
                <h1 className="text-3xl bg-black text-center cursor-pointer p-8">
                    <span className="text-amber-400">Movie</span>Picker
                </h1>

                <div className="mt-5">
                    <h1 className="text-2xl px-5">Discover</h1>
                    <ul className=" text-xl flex flex-col cursor-pointer w-full p-5  ">
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
