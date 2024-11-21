'use client'
import {ReactNode} from "react";
import "./globals.css";

import Header from "@/app/components/Header/Header";

export default function RootLayout(props: { children: ReactNode }) {
    const {children} = props

    return (
        <html>
        <body>
        <Header/>
        {children}
        </body>
        </html>
    )
}
