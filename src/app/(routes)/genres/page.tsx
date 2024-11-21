'use server'

import React, {FC} from 'react';

import {getGenres} from "@/app/actions/getGenres";
import GenreList from "@/app/components/GenresContainer/GenreList/GenreList";
import {IGenre} from "@/app/models/IGenre";

type Props = {
    genres: IGenre[];
};

const GenresPage: FC<Props> = async () => {

    const genres = await getGenres();
    return (
        <div>
            {genres && <GenreList genres={genres}/>}
        </div>
    );
};

export default GenresPage;