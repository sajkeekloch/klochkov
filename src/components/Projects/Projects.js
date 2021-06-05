import Project from '../Project/Project'
import './Projects.css'
import data from '../../data.json'
import { useEffect } from 'react'

function Projects() {
    let projects = data.map((el) => {
        return( 
            <Project 
                key = { el.id } 
                data = { el }
                /> 
        )
    })

    useEffect(() => {
        document.title = "проекты"
    })

    return(
        <div className="projects">
            <h2 className="projects__title">Проекты</h2>
            <div className="projects__container">
                { projects }
            </div>
        </div>
    )
}

export default Projects