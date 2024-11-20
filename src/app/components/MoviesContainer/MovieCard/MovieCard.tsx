import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";

type Props = {
    movie: IMovie
}

const MovieCard: FC<Props> = ({movie}: Props) => {
const {title, release_date} = movie;
    return (
        <div>
            <div>title: {title}</div>
            <div>genres: {release_date}</div>
        </div>
    );
};

export {MovieCard};