import Image from 'next/image'
import css from './MainBanner.module.css'

const MainBanner = () => {
    return (
        <section className={`${css.hero} container`}>
          
        <h1 className={css.title}>Your medication delivered</h1>
        <p className={css.text}>Say goodbye to all your healthcare worries with us</p>

          <picture>
            <source 
                srcSet='/Hero-mobile2x.webp'
                media='(min-resolution: 2dppx)'/>

            <Image 
                className={css.img}
                src='/Hero-mobile1x.webp'
                alt='Hero Img'
                sizes='(max-width: 371px) calc(100vw - 40px), 331px'
                width={331}
                height={312}
                loading="eager"/>    
          </picture>
          
        </section>
    )
}

export default MainBanner