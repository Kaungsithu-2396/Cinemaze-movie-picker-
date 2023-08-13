"use client";
type props = {
    genres: movieGenres;
};
import { RxCross1 } from "react-icons/rx";
import React from "react";
import NavList from "./NavList";
import { GoFilter } from "react-icons/go";
import { BiSolidCameraMovie } from "react-icons/bi";
import Search from "./Search";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import path from "path";
export default function NavSection({ genres }: props) {
    const [openSideBar, setOpenSideBar] = useState(false);
    const pathName = usePathname();
    console.log(pathName);

    return (
        <>
            <nav className=" xl:w-[20%] lg:w-[25%] md:w-[23%] lg:h-screen overflow-y-scroll     w-full lg:bg-[#242526]  gap-5 ">
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
                        <Search size={10} />
                    </div>
                    <span
                        className="lg:hidden block"
                        onClick={() => setOpenSideBar(!openSideBar)}
                    >
                        <GoFilter className="md:text-4xl text-2xl" />
                    </span>
                </div>

                {/* <div className="mt-5  hidden lg:block "> */}
                <div className="mt-5  hidden lg:block ">
                    <h1 className="text-2xl t px-5">Discover</h1>
                    <ul className="  flex flex-col cursor-pointer w-full py-2 px-5  text-lg  ">
                        <NavList
                            title="Home"
                            to="/"
                            space="p-5"
                            fontSize="lg"
                            isActive={pathName == "/"}
                        />
                    </ul>

                    <h1 className="text-2xl px-5">Categories</h1>
                    <ul className="  flex flex-col cursor-pointer w-full py-2 px-5  text-lg  ">
                        {genres.genres.map((category) => {
                            const isActive =
                                pathName == `/genre/${category.id}`;

                            return (
                                <NavList
                                    title={category.name}
                                    key={category.id}
                                    to={`/genre/${category.id}?name=${category.name}&page=1`}
                                    space="p-5"
                                    fontSize="lg"
                                    isActive={isActive}
                                />
                            );
                        })}
                    </ul>
                </div>
                {/* phone view */}
                {openSideBar && (
                    <div
                        className={` p-5 flex justify-between fixed top-0 md:w-[70%] w-full h-screen  z-50 bg-black    `}
                    >
                        <div className="md:w-[70%] w-[100%]">
                            <h1 className="text-xl px-5">Discover</h1>
                            <ul className="  flex flex-col cursor-pointer w-full py-2 px-5  text-lg  ">
                                <NavList
                                    title="Home"
                                    to="/"
                                    space="px-2 py-4"
                                    fontSize="base"
                                    isActive={pathName == "/"}
                                />
                            </ul>

                            <h1 className="text-2xl px-5">Categories</h1>
                            <ul className=" grid gap-5 grid-cols-3 cursor-pointer w-full py-2 px-5 overflow-scroll  text-lg  ">
                                {genres.genres.map((category) => {
                                    const isActive =
                                        pathName == `/genre/${category.id}`;
                                    return (
                                        <NavList
                                            title={category.name}
                                            key={category.id}
                                            to={`/genre/${category.id}?name=${category.name}&page=1`}
                                            space="px-2 py-4"
                                            fontSize="base"
                                            isActive={isActive}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="" onClick={() => setOpenSideBar(false)}>
                            <RxCross1 />
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
