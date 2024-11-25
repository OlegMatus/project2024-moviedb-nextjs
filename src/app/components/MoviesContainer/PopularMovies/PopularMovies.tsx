import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import css from "@/app/components/MoviesContainer/MoviesList/MoviesList.module.css";
import {MovieCard} from "@/app/components/MoviesContainer/MovieCard/MovieCard";
import {Pagination} from "@mui/material";

type Props = {
    movies: IMovie[];
}
const PopularMovies: FC<Props> = async ({movies}: Props) => {

    return (
        <div className={css.Main}>
            <div className={css.MoviesListContainer}>
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <Pagination/>
            </div>
        </div>
    );
};

export default PopularMovies;