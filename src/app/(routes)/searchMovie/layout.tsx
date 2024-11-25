import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'SearchLayout metadata'
}
type Props = { children: React.ReactNode }

const SearchLayout = ({children}: Props) => {
    return (
        <div>
            SearchLayout
            {children}
        </div>
    );
};

export default SearchLayout;