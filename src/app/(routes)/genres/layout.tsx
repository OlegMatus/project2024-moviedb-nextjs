import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'GenresLayout metadata'
}
type Props = { children: React.ReactNode }

const GenresLayout = ({children}: Props) => {

    return (
        <div>
            GenresLayout
            {children}
        </div>
    );
};

export default GenresLayout;