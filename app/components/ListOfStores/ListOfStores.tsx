import { NearestMedicine } from '@/types/type'
import css from './ListOfStores.module.css'
import Icon from '../Icon/Icon';
import Image from 'next/image';

type Props = {
    data: NearestMedicine[];
}
const ListOfStores = ({data}: Props) => {

    return (
        <ul className={css.list}>
            {data.map((pharmacy)=> (
                <li 
                    className={css.pharmacyCart} 
                    key={pharmacy._id}>

                        <div className={css.headerCart}>
                            <h3 className={css.title}>{pharmacy.name.length > 12 
                                ? `${pharmacy.name.slice(0, 12)}...` : pharmacy.name}
                            </h3>

                            <div className={css.statusWrap}>
                                <span className={css.number}><Icon variant='star'/>{pharmacy.rating}</span>
                                <span className={pharmacy.status === 'open' ? css.open : css.closed}>
                                    {pharmacy.status === 'open' ? 'open' : 'close'}
                                </span>
                            </div>
                            
                        </div>

                        <div className={css.info}>
                            <div className={css.address}>
                                <Icon variant='location'/>
                                <span className={css.location}>{pharmacy.address}</span>
                            </div>
                            
                            <div className={css.address}>
                                 <Icon variant='phone'/>
                                 <span className={css.location}>{pharmacy.phone}</span>
                            </div>
                        </div>

                        <Image 
                            className={css.lineOne}
                            src='/line-1.webp'
                            width={59}
                            height={90}
                            alt='line img'
                        />

                        <Image 
                            className={css.lineTwo}
                            src='/line-2.webp'
                            width={121}
                            height={87}
                            alt='line img'
                        />

                        <Image
                            className={css.lineThree} 
                            src='/line-3.webp'
                            width={108}
                            height={34}
                            alt='line img'
                        />

                </li>
            )).slice(0, 6)}
            
        </ul>
    )
}

export default ListOfStores