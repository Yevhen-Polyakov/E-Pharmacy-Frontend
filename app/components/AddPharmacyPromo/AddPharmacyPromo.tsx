import Link from 'next/link'
import css from './AddPharmacyPromo.module.css'
import Image from 'next/image'
import RunningLine from '../RunningLine/RunningLine'

const AddPharmacyPromo = () => {
    return (
        <section className={`${css.addPharmacy} container`}>
            <div className={css.wrap}>
                <div className={css.info}>
                    <div className={css.textWrap}>
                        <h2 className={css.title}>Add the medicines you need online now</h2>
                        <p className={css.description}>Enjoy the convenience of having your prescriptions filled from home by connecting with your community pharmacy through our online platform.</p>
                    </div>
                    <Link className={css.link} href='/medicine-store' aria-label='Medicine store'>Buy medicine</Link>
                </div>

                <picture>
                    <source 
                        srcSet='/promo-mobile2x.webp 1x,
                        /promo-mobile2x.webp 2x'
                        />

                <Image 
                    className={css.img}
                    src='/promo-mobile1x.webp'
                    alt='Promo Img'
                    width={295}
                    height={335}
                    loading="eager"/>    
                </picture>
            </div>

            <div className={css.runningLine}>
                <RunningLine/>
            </div>
        </section>
    )
}

export default AddPharmacyPromo