import { useEffect } from 'react'
import { Container, Title, SubTitle, Button, StyledLink } from '../../assets/customStyled'

function Main() {
    useEffect(() => {
        document.title = "клочков"
    })

    return(
        <Container>
            <Title> Клочков Александр</Title>
            <SubTitle>фронтенд-разработчик</SubTitle>
            <StyledLink to='/projects'>
                <Button>смотреть проекты</Button>
            </StyledLink>
        </Container>
    )
}

export default Main