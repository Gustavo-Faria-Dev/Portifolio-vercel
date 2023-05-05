import styles from './Photo.module.css'


function Photo(){
    return(
        <div id='sobre' className = {styles.photo}>
            <img  style={{
                width: 300,
                borderRadius: 500

            }} src = '/images/eu.jpeg' />

            <div className={styles.sobre}>
            <h1>
                Sobre
            </h1>
            
            <p>

            Me formei em 2021 no curso de engenharia de materiais e atuei no setor de compras de uma multinacional, líder em seu setor. 
            Em 2022 decidi seguir minha paixão e aprofundar meus conhecimentos na área de programação. Atualmente desenvolvo aplicações Web utilizando tecnologias como React, JavaScript, HTML e CSS.
            </p>
            </div>

        </div>
    )
}

export default Photo