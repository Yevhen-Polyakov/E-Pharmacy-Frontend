import Link from 'next/link'
import css from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={`${css.footer} container`}>
            <div className={css.logoWrap}>
                 <Link href='/' aria-label='Home'>
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
                <span className={css.span}>E-Pharmacy</span>
            </div>

            <p className={css.text}>Get the medicine to help you feel better, get back to your active life, and enjoy every moment.</p>

            <nav className={css.nav}>
                <ul className={css.list}>

                    <li>
                        <Link
                            className={css.link} 
                            href='/' 
                            aria-label='Home'>
                                Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            className={css.link} 
                            href='/medicine-store' 
                            aria-label='Medicine Store'>
                                Medicine Store
                        </Link>
                    </li>

                    <li>
                        <Link 
                            className={css.link}
                            href='/medicine' 
                            aria-label='Medicine'>
                                Medicine
                        </Link>
                    </li>

                </ul>
            </nav>

            <div className={css.line}></div>

            <p className={css.textLicense}>© E-Pharmacy 2023. All Rights Reserved  <span className={css.spanLine}></span>  <Link href='#'>Privacy Policy</Link>  <span className={css.spanLine}></span> <Link href='#'>Terms & Conditions</Link></p>


        </footer>
    )
}

export default Footer