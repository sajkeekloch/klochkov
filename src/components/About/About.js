import {React, useEffect} from 'react'
import { Container, SecondaryTitle, shadow } from '../../assets/customStyled'
import styled from 'styled-components'
import placeholder from '../../assets/images/placeHolder.jpeg'
import hobbies from '../../dataHobby' 

function About() {

    const HobbiesContainer = styled(Container)`
        align-self: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 0;
        padding-bottom: 10vw;
    `

    const CardContainer = styled.div`
        width: 21vw;
        height: 21vw;
        color: white;
        text-align: center; 
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

    const HobbyCard = styled(shadow)`
        width: 21vw;
        height: 21vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
    `

    const CardBackground = styled.img`
        width: 21vw;
        height: 21vw;
    `

    const cards = hobbies.map(el => {
        return (
                <CardContainer key = { el.id }>
                    <CardBackground
                        src= { el.image || placeholder }
                    />
                    <HobbyCard>
                        { el.text }
                    </HobbyCard>
                </CardContainer>
        )
    })

    useEffect(() => {
        document.title = "обо мне"
    })

    return(
        <Container>
            <SecondaryTitle>Мне нравится</SecondaryTitle>
            <HobbiesContainer>
                { cards }
            </HobbiesContainer>

        </Container>
    )
}

export default About