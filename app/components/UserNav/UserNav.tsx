'use client'

import Link from 'next/link'
import css from './UserNav.module.css'
import { usePathname } from 'next/navigation'

type UserNavProps = {
    inBurgerMenu?: boolean,
    onNavigate: ()=> void
}

const UserNav = ({inBurgerMenu, onNavigate}: UserNavProps) => {
    const pathName = usePathname() 
    const isActive = (href: string) => href === '/'
        ? pathName === '/'
        : pathName === href || pathName.startsWith(`${href}/`)

    return(
        <nav className={`${css.nav} ${inBurgerMenu ? css.inBurgerMenu : ''}`} aria-label='Main Navigation'>
            <ul className={css.list}>
                <li className={css.item}>
                    <Link 
                        className={css.link}
                        href='/' 
                        aria-label='Home' 
                        aria-current={isActive('/') ? 'page' : undefined}
                        onClick={onNavigate}>Home</Link>
                </li>
                <li className={css.item}>
                    <Link 
                        className={css.link}
                        href='/medicine-store' 
                        aria-label='Medicine store' 
                        aria-current={isActive('/medicine-store') ? 'page' : undefined}
                        onClick={onNavigate}>Medicine store</Link>
                </li>

                <li className={css.item}>
                    <Link
                        className={css.link} 
                        href='/medicine' 
                        aria-label='Medicine' 
                        aria-current={isActive('/medicine') ? 'page' : undefined}
                        onClick={onNavigate}>Medicine</Link>
                </li>
            </ul>

        </nav>
    )
}

export default UserNav