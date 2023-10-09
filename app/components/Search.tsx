"use client";
type props = {
    size: number;
};
// type moviesDataCollection = movies[];
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import SearchResult from "./SearchResult";
export default function Search({ size }: props) {
    const [searchText, setsearchText] = useState("");
    const [data, setData] = useState<movies>();
    const [hide, setHide] = useState<Boolean>(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setsearchText(e.target.value);
        setHide(false);
    };
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=418a76a85ac7586cda9a8a2a593d5487`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [searchText]);

    return (
        <>
            <div className=" relative lg:m-5 flex flex-col ">
                <input
                    type="text"
                    name=""
                    placeholder="&#128269; Titanic.."
                    autoFocus
                    className=" lg:w-[50%] w-full   lg:px-10 lg:py-3 px-5 py-2 md:px-14 md:py-3  bg-[#242526] outline-none  text-white text-xl lg:border-2 rounded-md border-black "
                    id=""
                    onChange={onChangeHandler}
                />
                {searchText ? (
                    <div
                        className={` bg-white absolute text-black h-80 overflow-y-scroll top-20 z-50`}
                        // onBlur={() => setHide(true)}
                    >
                        {!hide &&
                            data &&
                            data.results.map((el) => {
                                return (
                                    <SearchResult
                                        key={el.id}
                                        src={el.poster_path}
                                        time={el.release_date}
                                        movieName={el.original_title}
                                        to={el.id}
                                    />
                                );
                            })}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}
