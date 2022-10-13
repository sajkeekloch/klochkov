import Project from '../Project/Project'
import { useEffect } from 'react'
import { Container, SecondaryTitle, List } from '../../assets/customStyled'
import styled from 'styled-components'
import dataProjects from '../../dataProjects'

function Projects() {
    let projects = dataProjects.map((el) => {
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

    const ProjectsList = styled(List)`
        flex-direction: column;  
    `

    return(
        <Container>
            <SecondaryTitle>Проекты</SecondaryTitle>
            <ProjectsList>
                { projects }
            </ProjectsList>
        </Container>
    )
}

export default Projects