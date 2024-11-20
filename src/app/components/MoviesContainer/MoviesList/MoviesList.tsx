import React, {FC} from 'react';
import {MovieCard} from "@/app/components/MoviesContainer/MovieCard/MovieCard";
import {IMovie} from "@/app/models/IMovie";

type Props = {
    movies: IMovie[];
}

const MoviesList: FC<Props> = ({movies}: Props) => {

    return (
        <div>
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};