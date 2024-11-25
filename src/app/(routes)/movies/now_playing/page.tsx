import React from 'react';

import NowPlayingMovies from "@/app/components/MoviesContainer/NowPlayingMovies/NowPlayingMovies";
import {getMovies} from "@/app/actions/getMovies";
import {now_playing} from "@/app/constants/urls";
import {SearchParams} from "@/app/models/typeSearchParams";

const NowPlayingPage = async ({ searchParams }: SearchParams) => {
    const pageParam = await searchParams.page?.trim() || '1';
    const page = parseInt(pageParam, 10);

    if (isNaN(page) || page <= 0) {
        console.error("Invalid page number provided:", page);
        throw new Error("Invalid page number. It should be a positive integer.");
    }
    const {results: movies} = await getMovies(now_playing, page);

    return (
        <div>
            {movies && <NowPlayingMovies movies={movies}/>}
        </div>
    );
};

export default NowPlayingPage;