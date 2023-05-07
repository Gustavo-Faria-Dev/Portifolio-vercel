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
              <img src = {`/images/pc.png`} width={40}/>
            </div>
            <div className={styles.Im}>
              Gustavo Faria
            </div>

            <div className={styles.box}>

            </div>
     

            <button className={styles.goTo} onClick={handleClickScroll2}>
                Sobre
            </button>
            <button className={styles.goTo} onClick={handleClickScroll2}>
                Skills
            </button>
            <button className={styles.goTo} onClick={handleClickScroll} >
                Contatos
            </button>
          
                      
        </header>
    )

}

export default Header

