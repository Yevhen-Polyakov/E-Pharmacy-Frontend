import Link from 'next/link'
import css from './AuthenticationLinks.module.css'

type AuthProps = {
    onNavigate: ()=> void;
}
const AuthSection = ({onNavigate}: AuthProps) => {
    return(
        <div className={css.wrap}>
            <ul className={css.list}>
                <li className={css.item}>
                    <Link 
                        href='/register'
                        aria-label='Register'
                        onClick={onNavigate}>Register</Link>
                </li>
                <li className={css.item}>
                    <Link 
                        href='/login' 
                        aria-label='Login'
                        onClick={onNavigate}>Login</Link>
                </li>
            </ul>

        </div>
    )
}

export default AuthSection