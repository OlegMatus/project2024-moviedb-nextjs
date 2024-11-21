import React, {FC, ReactNode} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

type NavLinkProps = {
    children: ReactNode;
    path: string
}

const NavLink: FC<NavLinkProps> = ({path, children}) => {
    const pathname = usePathname()

    return (
        <nav>
            <Link className={`link ${pathname === path ? 'active' : ''}`} href={path}>
                {children}
            </Link>
        </nav>
    );
};

export default NavLink;