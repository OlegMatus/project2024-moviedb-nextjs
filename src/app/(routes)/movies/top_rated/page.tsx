import React from 'react';
import {SearchParams} from "@/app/models/typeSearchParams";
import {getMovies} from "@/app/actions/getMovies";
import {top_rated} from "@/app/constants/urls";
import PopularMovies from "@/app/components/MoviesContainer/PopularMovies/PopularMovies";

const TopRatedPage = async ({searchParams}: SearchParams) => {
    const pageParam = await searchParams.page?.trim() || '1';
    const page = parseInt(pageParam, 10);

    if (isNaN(page) || page <= 0) {
        console.error("Invalid page number provided:", page);
        throw new Error("Invalid page number. It should be a positive integer.");
    }
    const {results: moviesData} = await getMovies(top_rated, page);

    return (
        <div>
            {moviesData && <PopularMovies movies={moviesData}/>}
        </div>
    );
};

export default TopRatedPage;