import styles from './Page.module.css'

import Header from '../header/Header'
import Photo from '../photo/Photo'
import Contacts from '../contacts/Contacts'
import Skills from '../skills/Skills'

function Page() {
    return(
        <>
        <Header />
        <Photo />
        <Skills />
        <Contacts />
        </>
    
    )
  
}


export default Page