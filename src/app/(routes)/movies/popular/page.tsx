'use server'
import React from 'react';
import {getMovies} from "@/app/actions/getMovies";
import {popular} from "@/app/constants/urls";
import PopularMovies from "@/app/components/MoviesContainer/PopularMovies/PopularMovies";
import {SearchParams} from "@/app/models/typeSearchParams";

const PagePopular = async ({searchParams}: SearchParams) => {
    const pageParam = await searchParams.page?.trim() || '1';
    const page = parseInt(pageParam, 10);

    if (isNaN(page) || page <= 0) {
        console.error("Invalid page number provided:", page);
        throw new Error("Invalid page number. It should be a positive integer.");
    }
    const {results: moviesData} = await getMovies(popular, page);

    return (
        <div>
            {moviesData && <PopularMovies movies={moviesData}/>}
        </div>
    );
};

export default PagePopular;