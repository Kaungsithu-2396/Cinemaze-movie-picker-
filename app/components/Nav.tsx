import NavList from "./NavList";
import { GoFilter } from "react-icons/go";
export default function Nav() {
    return (
        <>
            <nav className=" lg:w-[20%]  w-full lg:bg-[#0D0D0D] relative  gap-5 ">
                <div className="text-3xl flex  justify-between   lg:relative absolute z-50 w-full bg-black bg-opacity-40  top-0 cursor-pointer p-8">
                    <h1>
                        {" "}
                        <span className="text-amber-400">Movie</span>Picker
                    </h1>
                    <span className="md:hidden block">
                        <GoFilter />
                    </span>
                </div>

                <div className="mt-5 sticky top-8 hidden lg:block">
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
