import { useContext } from 'react'
import { useState, useEffect } from 'react'
import './ProjectsList.css'

// Assets
import LikedFilled from '../../assets/like-filled.svg'
import LikeOutline from '../../assets/like.svg'

// Utils
import { getApiData } from '../../services/apiServices'

// COMPONENTS

import Button from '../Button/Button'

// CONTEXTS
import { AppContext } from '../../contexts/AppContext'

function ProjectsList(){

    const appContext = useContext(AppContext)
    const [favProjects, setFavProjects] = useState([])
    const [projects, setProjects] = useState([])
    const handleSavedProject = (id) => {
        setFavProjects((prevFavProjects) => {
            if(prevFavProjects.includes(id)){
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data...');
                const projectsResponse = await getApiData('projects');
                console.log('Data fetched:', projectsResponse);
                setProjects(projectsResponse || []);
            } catch (err) {
                console.error('Fetch error:', err);
                setProjects([]);
            }
        };
    
        fetchData();

    }, []);

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if(savedFavProjects){
            setFavProjects(savedFavProjects)
        }
    }, [])


    return (
        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className='projects-grid'>
                {
                    projects ?
                    
                    projects.map((project) => (
                        <div key={project.id} className='project-card d-flex jc-center al-center fd-column'>
                            <div 
                                className='thumb tertiary-background'
                                style={{backgroundImage: `url(${project.thumb})`}}>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <Button buttonStyle='unstyled' onClick={() => handleSavedProject(project.id)}>
                                <img src={favProjects.includes(project.id) ? LikedFilled : LikeOutline} height="20px" /> 
                            </Button>                                       
                        </div>
                    ))

                    :

                    null
                }
            </div>
        </div>
    )   
}

export default ProjectsList