import css from './Button.module.css'

type ButtonProps = {
    children: React.ReactNode;
    variant?:'burger' | 'close';
    type?: 'button' | 'reset' | 'submit';
    'aria-label'?: string;
    disabled?: boolean;
    className?: string;
    onClick?: ()=> void;

}

const Button = ({children, className = '', variant, ...props}: ButtonProps) => {
    const buttonClassname = [css.button, variant && css[variant], className].filter(Boolean).join(' ')
    return (
        <button className={buttonClassname} {...props}>{children}</button>
    )
}

export default Button