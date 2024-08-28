import { useContext } from 'react'
import AboutText from "../components/AboutText/AboutText"
import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner'
import Footer from "../components/Footer/Footer"

// CONTEXTS
import { AppContext } from '../contexts/AppContext'

function About(){

    const appContext = useContext(AppContext)

    return (
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.about} image='about.jpg'/>
        <div className='container'>
            <AboutText/>
        </div>
        <Footer />
        </>
    )
    
}

export default About