import React from "react";

export default async function getPopularMovies() {
    const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=418a76a85ac7586cda9a8a2a593d5487&language=en-US"
    );
    if (!response.ok) undefined;
    return response.json();
}
