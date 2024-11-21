import React, {FC} from 'react';

import {IGenre} from "@/app/models/IGenre";
import GenreCard from "@/app/components/GenresContainer/GenreCard/GenreCard";

type Props = {
    genres: IGenre[];
}

const GenreList: FC<Props> = ({genres}: Props) => {

    return (
        <div>
            {genres.map((genre) => <GenreCard key={genre.id} genre={genre}/>)}

        </div>
    );
};

export default GenreList;