import styles from './Photo.module.css'


function Photo(){
    return(
        <div className = {styles.photo}>
            <img  style={{
                width: 300

            }} src = '/images/eu.jpeg' />
        </div>
    )
}

export default Photo