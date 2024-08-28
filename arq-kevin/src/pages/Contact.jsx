import { useContext } from 'react'
import ContactForm from "../components/ContactForm/ContactForm"
import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner'
import Footer from "../components/Footer/Footer"

// CONTEXTS
import { AppContext } from '../contexts/AppContext'

function Contact(){

    const appContext = useContext(AppContext)

    return (
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.contact} image='contacts.jpg'/>
        <div className='container'>
            <ContactForm/>
        </div>
        <Footer />
        </>
    )
    
}

export default Contact