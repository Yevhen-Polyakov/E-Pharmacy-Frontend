'use client'

import { useQuery } from '@tanstack/react-query'
import css from './Reviews.module.css'
import { getReviews } from '@/lib/api'
import Image from 'next/image'

const Reviews = () => {
    const {data, isLoading, isError}= useQuery({
        queryKey: ['reviews'],
        queryFn: getReviews
    })
   
    return (
        <section className={`${css.reviews} container`}>
            <div className={css.textWrap}>
                <h2 className={css.title}>Reviews</h2>
                <p className={css.text}>Search for Medicine, Filter by your location</p>
            </div>

            <ul className={css.list}>
            {isLoading && <p>...Loading</p>}
            {isError && <p>Error!</p>}

            {data?.map((reviews)=> (

                <li key={reviews._id} className={css.item}>
                    <Image 
                        className={css.img}
                        src={reviews.avatar}
                        alt={reviews.name}
                        width={64}
                        height={64}
                        />

                     <p className={css.name}>{reviews.name}</p>
                     <p className={css.textReviews}>{reviews.testimonial}</p>   
                </li>
            ))}
                

            </ul>
        </section>
    )
}

export default Reviews