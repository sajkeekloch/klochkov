import placeHolder from '../../assets/images/placeHolder.jpeg'
import styled from "styled-components"
import { A, List, shadow, SubTitle } from '../../assets/customStyled'
import { size } from '../../style/media'
import dataProjects from '../../dataProjects'

function Project({ data }) {

    const ProjectCard = styled.div`
        margin-bottom: 57px;
        display: flex;
        background-color: #000;
        color: #fff;
        background-image: url('../../assets/images/1.png');
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        height: 400px;
        @media (max-width: ${size.large}) {
            height: 300px;
        }
    `

    const CardTitle = styled(SubTitle)`
        text-align: left;
        margin: 0;
    `

    const CardDescription = styled(shadow)`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10% 5%;
        @media (max-width: ${size.large}) {
            padding: 5% 5%;
        }
    `
    const CardText = styled.p`
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 80px;
    `
    const CardTech = styled(List)`
        opacity: .4;
        justify-content: flex-start;
    `
    const CardLink = styled(A)`
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
    `
    const Item = styled.li`
        margin-right: 5px;
    `

    let techItems = data.tech.map((el, index) => {
        const id = data.tech.length - index
        return(<Item key={ id }> { el } </Item>)
    })

    return(
        <>
            <CardTitle> { data.name } </CardTitle>
            <ProjectCard 
                style = {{
                    backgroundImage: `url(${ data.image })`
                }}
            >
            <CardDescription>
                <CardText>{ data.text }</CardText>
                <CardTech>{ techItems }</CardTech>
                <CardLink 
                    href ={ data.link } 
                    target="_blank"
                    rel="noreferrer">{ data.linkText }
                </CardLink>
            </CardDescription>
            </ProjectCard>
        </>
        
    )
}

export default Project