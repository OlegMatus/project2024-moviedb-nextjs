import React, {FC} from 'react';
import {IGenre} from "@/app/models/IGenre";

type Props = {
    genre: IGenre;
}
const GenreCard: FC<Props> = ({genre: {id, name}}:Props) => {

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    );
};

export default GenreCard;