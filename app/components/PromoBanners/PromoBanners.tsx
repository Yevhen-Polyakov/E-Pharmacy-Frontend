import Link from 'next/link'
import css from './PromoBanners.module.css'

const PromoBanners = () => {
    return(
        <section className={`${css.promo} container`}>

            <ul className={css.promoList}>

                <li className={css.promoItem}>
                    <div className={css.headerWrap}>
                        <span className={css.numberBanner}>1</span>
                        <h3 className={css.title}>Huge Sale</h3>
                    </div>

                    <div className={css.footerWrap}>
                        <span className={css.number}>70%</span>
                        <Link className={css.link} href='/medicine'>
                            Shop now
                        </Link>
                    </div>
                </li>

                <li className={css.promoItem}>
                    <div className={css.headerWrap}>
                        <span className={css.numberBanner}>2</span>
                        <h3 className={css.title}>Secure delivery</h3>
                    </div>

                    <div className={css.footerWrap}>
                        <span className={css.number}>100%</span>
                        <Link className={css.link} href='/medicine'>
                            Read more
                        </Link>
                    </div>
                </li>

                <li className={css.promoItem}>
                    <div className={css.headerWrap}>
                        <span className={css.numberBanner}>3</span>
                        <h3 className={css.title}>Off</h3>
                    </div>

                    <div className={css.footerWrap}>
                        <span className={css.number}>35%</span>
                        <Link className={css.link} href='/medicine'>
                            Shop now
                        </Link>
                    </div>
                </li>
            </ul>

        </section>
    )
} 

export default PromoBanners