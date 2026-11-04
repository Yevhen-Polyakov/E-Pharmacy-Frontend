
import { getMedicineStores } from '@/lib/api'
import css from './MedicineStores.module.css'

const MedicineStores = async () => {
    const pharmacy = await getMedicineStores()
    console.log("pharmacy", pharmacy)

    return(
        <section className={`${css.medicineStores} container`}>
            <div className={css.textWrap}>
                <h2 className={css.title}>Your Nearest Medicine Store</h2>
                <p className={css.text}>Search for Medicine, Filter by your location</p>

                
            </div>


        </section>
    )
}

export default MedicineStores