import styles from './Skills.module.css'

function Skills(){
    return(

        <div id='skills' className={styles.skills}>
            <div>   
                <h1>
                    Skills
                </h1>
            </div>
            <div className={styles.box}>

            </div>
            <div className={styles.list}>
                <li>React</li>
                <li>Html</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </div>
            
        </div>

    )
}

export default Skills