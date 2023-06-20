import styles from './Header.module.css'
import { Link } from 'react-router-dom'



export function Header() {

    return (
        <header className={styles.header}>
            <h1>
                <Link to="/">Rick and Morty App</Link>
            </h1>
            
        </header>
    )
}
