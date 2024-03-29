'use client'
import Link from "next/link";
import styles from './navbar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from "next-auth/react";
const links = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'About',
        url: '/about'
    },
    {
        id: 3,
        title: 'Contact',
        url: '/contact'
    },
    {
        id: 4,
        title: 'Blog',
        url: '/blog'
    },
    {
        id: 5,
        title: 'Portfolio',
        url: '/portfolio'
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard'
    }
]
const Navbar = () => {
    const session = useSession();
    return (
        <div className={styles.container}>
            <Link
                className={styles.logo}
                href='/'>
                gonzadev
            </Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>{link.title}</Link>
                ))}
                {
                    session.status === 'authenticated' &&(
                <button
                    className={styles.logout}
                    onClick={ signOut }>
                    Logout
                </button>
                )}
            </div>
        </div>
    )
}
export default Navbar;