'use client'

import { useQuery } from '@tanstack/react-query'
import ListOfStores from '../ListOfStores/ListOfStores'
import css from './MedicineStores.module.css'
import { getMedicineStores } from '@/lib/api'

const MedicineStores = () => {

    const {data, isError, isLoading,}= useQuery({
       queryKey:['nearest'],
       queryFn: getMedicineStores 
    });
   
    return(
        <section className={`${css.medicineStores} container`}>
            <div className={css.textWrap}>
                <h2 className={css.title}>Your Nearest Medicine Store</h2>
                <p className={css.text}>Search for Medicine, Filter by your location</p>
            </div>

            {isLoading && <p>...loading</p>}
            {isError && <p>An ERROR</p>}
            <ListOfStores data={data ?? []}/>


        </section>
    )
}

export default MedicineStores