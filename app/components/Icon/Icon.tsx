import css from './Icon.module.css'

type iconProps = {
    className?: string;
    variant: 'burger' | 'close';
    style?: React.CSSProperties;
    onClick?: ()=> void; 
}

const Icon = ({className = "", variant, ...props}: iconProps)=> {
    const iconClassName = [css.icon, variant && css[variant], className].filter(Boolean).join(" ")
    return (
        <svg aria-label={variant} className={iconClassName} {...props}>
            <use href={`/sprite.svg#icon-${variant}`}/>
        </svg>
    )
}

export default Icon