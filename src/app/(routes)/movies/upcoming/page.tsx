import React from 'react';
import {SearchParams} from "@/app/models/typeSearchParams";
import {getMovies} from "@/app/actions/getMovies";
import {upcoming} from "@/app/constants/urls";
import PopularMovies from "@/app/components/MoviesContainer/PopularMovies/PopularMovies";

const UpComingPage = async ({searchParams}: SearchParams) => {
    const pageParam = await searchParams.page?.trim() || '1';
    const page = parseInt(pageParam, 10);

    if (isNaN(page) || page <= 0) {
        console.error("Invalid page number provided:", page);
        throw new Error("Invalid page number. It should be a positive integer.");
    }
    const {results: moviesData} = await getMovies(upcoming, page);

    return (
        <div>
            {moviesData && <PopularMovies movies={moviesData}/>}
        </div>
    );
};

export default UpComingPage;