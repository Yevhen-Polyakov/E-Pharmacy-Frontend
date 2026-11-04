import Link from 'next/link'
import css from './Header.module.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import Image from 'next/image'

const Header = () => {
    return (
        <header className={`${css.header} container `}>
            
            <div className={css.headerWrap}>
                <div className={css.wrapLogo}>
                    <Link href="/" aria-label='Home'>
                        <picture>
                            <source 
                                srcSet='/logo-mobile2x.webp'
                                media='(min-resolution: 2dppx)'/>

                            <Image 
                                className={css.logo}
                                src='/logo-mobile1x.webp'
                                alt='Hero Img'
                                width={32}
                                height={32}
                                loading="eager"/>    
                        </picture>
                    </Link>

                    <span className={css.logoText}>E-Pharmacy</span>

                </div>

                <BurgerMenu/>
            </div>
            
        </header>
      
    )
}

export default Header