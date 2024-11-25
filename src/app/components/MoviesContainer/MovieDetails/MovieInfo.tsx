'use client'
import React, {FC} from 'react';

import {IMovie} from "@/app/models/IMovie";

import css from "./MovieInfo.module.css";
import {basePosterURL, baseTrailerURL} from "@/app/constants/urls";
import Image from "next/legacy/image";
import Link from "next/link";
import {Badge} from "reactstrap";
import {IGenre} from "@/app/models/IGenre";
import {IVideo} from "@/app/models/IVideo";
import StarsRating from "@/app/components/Rating/StarsRating";

type MovieInfoProps = {
    currentMovie: IMovie;
    genres: IGenre[];
    trailer: IVideo;
    movieTitle: string
}

const MovieInfo: FC<MovieInfoProps> = ({currentMovie, genres, trailer, movieTitle}) => {
    const {
        title,
        original_title,
        original_language,
        release_date,
        runtime,
        poster_path,
        overview,
        vote_average
    } = currentMovie;

    const {key, type} = trailer;

    return (
        <div className={css.MovieInfoMain}>
            <div><h1>{title}</h1></div>
            <div><h2>({original_title})</h2></div>
            <div className={css.poster_container}>
                <div>
                    <Image src={`${basePosterURL}/${poster_path}`} alt={currentMovie.title} width={400} height={550}/>
                </div>
                <div className={css.info_block}>
                    <h3>Rating</h3>
                    <StarsRating vote_average={vote_average}/>
                    <div>
                        <h3>Genres</h3>
                        {genres.map(genre => (
                            <div key={genre?.id}>
                                <Link href={`/genres/${genre?.id}?page=1`}>
                                    <Badge color={'black'} pill={false}
                                           style={{color: "#cccccc"}}><b>{genre?.name || 'Unknown Genre'}</b></Badge>
                                </Link>
                            </div>
                        ))}
                        {genres.length === 0 && <div>No genres available</div>}
                    </div>
                    <h3>Language</h3>
                    <div>
                        <Badge color={'black'} pill={false}
                               style={{color: "#cccccc"}}><b>{original_language}</b></Badge>
                    </div>
                    <h3><b>Release Date</b></h3>
                    <div>
                        <Badge color={'black'} pill={false} style={{color: "#cccccc"}}><b>{release_date}</b></Badge>
                    </div>
                    <h3>Runtime</h3>
                    <div>
                        <Badge color={'black'} pill={false} style={{color: "#cccccc"}}><b>{runtime}min</b></Badge>
                    </div>
                </div>
            </div>
            <div style={{marginTop: 50}}><h3>Overview</h3></div>
            <div className={css.gradientBox}>
                <h4 className={css.gradientText}>{overview}</h4>
            </div>
            <div className={css.trailer_block}>
                {trailer && (
                    <iframe title={movieTitle} width={760} height={415} src={`${baseTrailerURL}/${key}`}
                            content={type}>{movieTitle}
                    </iframe>
                )}
            </div>
        </div>
    );
};

export default MovieInfo;