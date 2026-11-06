
import css from './Reviews.module.css'

const Reviews = () => {
   
    return (
        <section className={`${css.reviews} container`}>
            <div className={css.textWrap}>
                <h2 className={css.title}>Reviews</h2>
                <p className={css.text}>Search for Medicine, Filter by your location</p>
            </div>

            <ul className={css.list}>

                <li className={css.item}>

                </li>

            </ul>
        </section>
    )
}

export default Reviews