import React from 'react'
import {Link} from 'gatsby'
import styles from './compStyles/header.module.scss'

const Header = () => {

    return (
        <header className={styles.header}>
            <h1>
                <Link className={styles.title} to="/">NazInc</Link>
            </h1>
            <nav>
                <ul className={styles.navList}> 
                    <li><Link activeClassName={styles.activeNavLink} className={styles.navLink} to="/">Home</Link></li>
                    <li><Link activeClassName={styles.activeNavLink} className={styles.navLink} to="/About">About</Link></li>
                    <li><Link activeClassName={styles.activeNavLink} className={styles.navLink} to="/Blog">Blog</Link></li>
                    <li><Link activeClassName={styles.activeNavLink} className={styles.navLink} to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header