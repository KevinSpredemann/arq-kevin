import { useContext } from 'react'
import Banner from '../components/Banner/Banner'
import Footer from "../components/Footer/Footer"
import ProjectsList from '../components/Projects-List/ProjectsList'
import Header from "../components/Header/Header"

// CONTEXTS
import { AppContext } from '../contexts/AppContext'

function Projects(){

    const appContext = useContext(AppContext)

    return (
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.projects} image='projects.jpg'/>
        <div className='container'>
             <ProjectsList></ProjectsList>
        </div>
        <Footer />
        </>
    )
    
}

export default Projects