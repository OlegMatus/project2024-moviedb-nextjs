import React, {FC} from 'react';

import {IGenre} from "@/app/models/IGenre";

import css from "./GenreCard.module.css";
import Link from "next/link";
import {Badge} from "reactstrap";


type Props = {
    genre: IGenre;
}
const GenreCard: FC<Props> = ({genre}:Props) => {

    return (
        <div className={css.genre_block}>
            <Link href={`/genres/${genre?.id}?page=1`}>
                <Badge color={'black'} pill={false}
                       style={{color: "#cccccc"}}><b>{genre?.name || 'Unknown Genre'}</b></Badge>
            </Link>
        </div>
    );
};

export default GenreCard;