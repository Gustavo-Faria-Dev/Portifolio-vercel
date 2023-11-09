import styles from './Contacts.module.css'


function Contacts(){
    return(
        
      
        <div id= "contacts" className={styles.contacts}>
        <div>
        <h2>
            Contatos
        </h2>
        </div>
            
        <div className={styles.images}>

            <a href = "https://github.com/Gustavo-Faria-Dev" target="_blank"> 
                <img src = {`/images/github.svg`} width={40}/> 
            
            </a>

        
        
        
            <a href = "https://wa.me/5512992395533" target="_blank"> 
                <img src = {`/images/wpp.svg`} width={45}/>  
            </a>
        </div>
    
        <p>desenvolvido por gu.co</p>
        </div>    
    
    
    )


}

export default Contacts