import Icon from '../Icon/Icon'
import css from './RunningLine.module.css'

const features = [
    'Take user orders form online',
    'Create your shop profile',
    'Manage your store',
    'Get more orders',
    'Storage shed',
];

const RunningLine = () => {
    return(
        <section className={css.features}>
            <div className={css.track}>
                {[0, 1].map((group)=> (

                <ul 
                    className={css.list} 
                    key={group} 
                    aria-hidden={group === 1}>

                    {features.map((feature, index)=> (
                        <li className={css.item} key={index}>
                            <Icon variant='lightning'/>
                            <span className={css.span}>{feature}</span>
                        </li>
                    ))}        
                      
                </ul>
                ))}
                
            </div>
        </section>
    )
}

export default RunningLine