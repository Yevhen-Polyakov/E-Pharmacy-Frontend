import Link from 'next/link'
import css from './Header.module.css'
import Icon from '../Icon/Icon'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Header = () => {
    return (
        <header className={`${css.header} container `}>
            
            <div className={css.headerWrap}>
                <div className={css.wrapLogo}>
                    <Link href={"/"} aria-label='Home'>
                        <Icon variant='logo'/>
                    </Link>

                    <span className={css.logoText}>E-Pharmacy</span>

                </div>

                <BurgerMenu/>
            </div>
            
        </header>
      
    )
}

export default Header