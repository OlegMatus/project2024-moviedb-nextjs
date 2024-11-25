import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import css from "@/app/components/MoviesContainer/MoviesList/MoviesList.module.css";
import {MovieCard} from "@/app/components/MoviesContainer/MovieCard/MovieCard";

type Props = {
    movies: IMovie[];
}
const TopRatedMovies: FC<Props> = async ({movies}: Props) => {

    return (
        <div className={css.Main}>
            <div className={css.MoviesListContainer}>
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default TopRatedMovies;