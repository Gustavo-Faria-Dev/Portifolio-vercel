import styles from './Header.module.css'

function Header (){

    const handleClickScroll = () => {
        const element = document.getElementById('contacts');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


      const handleClickScroll2 = () => {
        const element = document.getElementById('sobre');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return(
        <header className={styles.header}>
            <div className={styles.Im}>
            Gustavo Faria
            </div>
            <button className={styles.goTo} onClick={handleClickScroll2}>
                About
            </button>
            <button className={styles.goTo} onClick={handleClickScroll} >
                Contatos
            </button>
                      
        </header>
    )

}

export default Header

