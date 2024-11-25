import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PopularLayout metadata'
}
type Props = { children: React.ReactNode }

const PopularLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PopularLayout;