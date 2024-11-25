'use client'
import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";

import css from "./MovieCard.module.css";
import Link from "next/link";
import PosterPreview from "@/app/components/Poster/PosterPreview";
import StarsRating from "@/app/components/Rating/StarsRating";

type Props = {
    movie: IMovie
}

const MovieCard: FC<Props> = ({movie}: Props) => {
    const {id, original_title, poster_path, release_date, vote_average} = movie;
    return (
        <div className={css.MovieCard}>
        <Link href={`/movies/${id}`}>
            <PosterPreview poster_path={poster_path} movie={movie}/>
        </Link>
            <div className={css.title_block}>
                <b>{original_title}</b>
            </div>
            <div>genres: {release_date}</div>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {MovieCard};