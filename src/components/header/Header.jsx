import styles from './Header.module.css'

function Header (){
    return(
        <header className={styles.header}>
            <div className={styles.Im}>
            Gustavo Faria
            </div>
            <div className={styles.goTo} >
                Home
            </div>
            <div className={styles.goTo} >
                About
            </div>
            <div className={styles.goTo} >
                Contacts
            </div>           
        </header>
    )

}

export default Header

