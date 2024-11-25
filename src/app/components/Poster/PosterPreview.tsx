
import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import {basePosterURL} from "@/app/constants/urls";
import Image from "next/legacy/image";

type Props = {
    poster_path: string;
    movie: IMovie
}

const PosterPreview: FC<Props> = ({poster_path, movie}) => {

    return (
        <div>
            {poster_path ? (
                <Image src={`${basePosterURL}/${poster_path}`} alt={movie.title}  width={220} height={300}/>
            ) : (
                <span>No Poster Available</span>
            )}
        </div>
    );
};

export default PosterPreview;
