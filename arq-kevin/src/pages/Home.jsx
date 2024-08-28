import Header from "../components/Header/Header"
import Hero from '../components/Hero/Hero'
import Footer from "../components/Footer/Footer"
import ProjectsList from '../components/Projects-List/ProjectsList'


function Home(){

    return (
        <>
        <Header />
        <div className='container'>
             <Hero/>
             <ProjectsList></ProjectsList>
        </div>
        <Footer />
        </>
    )
    
}

export default Home