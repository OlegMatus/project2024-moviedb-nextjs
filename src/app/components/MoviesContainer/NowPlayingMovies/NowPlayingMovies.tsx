import React from 'react';

import {MoviesList} from "@/app/components/MoviesContainer/MoviesList/MoviesList";
import {IMovie} from "@/app/models/IMovie";

type Props = {
    movies: IMovie[];
}

const NowPlayingMovies = async ({movies}: Props) => {

    return (
        <div>
            {movies && <MoviesList movies={movies}/>}
        </div>
    );
};

export default NowPlayingMovies;