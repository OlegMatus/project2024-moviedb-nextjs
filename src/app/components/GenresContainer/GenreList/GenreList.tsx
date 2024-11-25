import React, {FC} from 'react';

import {IGenre} from "@/app/models/IGenre";
import GenreCard from "@/app/components/GenresContainer/GenreCard/GenreCard";

import css from "./GenreList.module.css";

type Props = {
    genres: IGenre[];
}

const GenreList: FC<Props> = ({genres}: Props) => {

    console.log(genres);
    return (
        <div className={css.Main}>
            {genres && genres.map((genre) => <GenreCard key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default GenreList;