type props = {
    genres: movieGenres;
};
import React from "react";
import NavList from "./NavList";
import { GoFilter } from "react-icons/go";
import { BiSolidCameraMovie } from "react-icons/bi";
import Search from "./Search";
import Link from "next/link";
export default function NavSelection({ genres }: props) {
    return (
        <>
            <nav className=" xl:w-[20%] lg:w-[25%] md:w-[23%] h-screen overflow-y-scroll     w-full lg:bg-[#242526]  gap-5 ">
                <div className="text-3xl flex  justify-between items-center gap-x-4 bg-[#242526]   lg:relative absolute z-50 w-full bg-opacity-40  top-0 cursor-pointer p-8">
                    <Link href="/">
                        <h1 className=" text-2xl text-amber-400 md:text-5xl">
                            <BiSolidCameraMovie />{" "}
                            <span className="text-white lg:block hidden lg:text-2xl">
                                Cine<span className="text-amber-400">maze</span>
                            </span>
                        </h1>
                    </Link>
                    <hr />

                    <div className="block lg:hidden">
                        <Search size={20} />
                    </div>
                    <span className="lg:hidden block">
                        <GoFilter className="md:text-4xl text-2xl" />
                    </span>
                </div>

                <div className="mt-5  hidden lg:block ">
                    <h1 className="text-2xl px-5">Discover</h1>
                    <ul className="  flex flex-col cursor-pointer w-full py-2 px-5  text-lg  ">
                        <NavList title="Home" to="/" />
                    </ul>

                    <h1 className="text-2xl px-5">Categories</h1>
                    <ul className="  flex flex-col cursor-pointer w-full py-2 px-5  text-lg  ">
                        {genres.genres.map((category) => {
                            return (
                                <NavList
                                    title={category.name}
                                    key={category.id}
                                    to={`/genre/${category.id}?name=${category.name}&page=1`}
                                />
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}
