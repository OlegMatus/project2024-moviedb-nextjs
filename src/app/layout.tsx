'use client'
import {ReactNode} from "react";
import "./globals.css";
import css from "./page.module.css"

import Header from "@/app/components/Header/Header";

export default function RootLayout(props: { children: ReactNode }) {
    const {children} = props

    return (
        <html>
        <body className={css.gradientText}>
        <Header/>
        {children}
        </body>
        </html>
    )
}
