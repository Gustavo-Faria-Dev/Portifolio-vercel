import styles from './Contacts.module.css'


function Contacts(){
    return(
        
      
        <div id= "contacts" className={styles.contacts}>
        <div>
        <h1>
            Contacts
        </h1>
        </div>
            
        <div>

        <a href = "https://github.com/Gustavo-Faria-Dev" target="_blank"> 
            <img src = {`/images/github.svg`}/> 
            
        </a>
        
        </div>
    
       
        </div>    
    
    
    )


}

export default Contacts