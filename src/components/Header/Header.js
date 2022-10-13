import { StyledLink, A, List, Button } from "../../assets/customStyled"
import styled from "styled-components"
import { size } from "../../style/media"


function Header(props) {
    const HeaderList = styled(List)`
        width: 30%;
        align-items: center;
        font-size: 18px;
        line-height: 21px;
        @media (max-width: ${size.large}) {
            width: 40%;
        }
    `

    const ListItem = styled.li`
        padding-left: 4px;
        padding-right: 4px;
        transition: .2s;
    `
    const HeaderButton = styled(Button)`
        width: 8vw;
        height: calc(2vh + 20px);
        @media (max-width: ${size.large}) {
            width: 8vw;
            height: calc(1vh + 20px);
            font-size: 10px;
        }
    `
    const Header = styled.header`
        position: fixed;
        width: calc(100% - 80px);
        z-index: 100;
        padding: 0 40px;
        height: 8vh;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    function handleMenu() {
        props.handleMenu()
    }

    return(
        <Header>
            {/* <Hamburger 
                handleMenu = {handleMenu}
            /> */}
            <StyledLink 
                className="regular header__link"
                exact to='/klochkov'
                activeClassName="selected">
                клочков
            </StyledLink>
            <HeaderList className="regular">
                <ListItem>
                    <StyledLink 
                        to='/projects'
                        activeClassName="selected">
                        проекты
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink     
                        to='/about'
                        activeClassName="selected">
                        обо мне
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <A href="mailto:sajkeekloch@gmail.com">
                        <HeaderButton>почта</HeaderButton>
                    </A>
                </ListItem>
            </HeaderList>
        </Header>
    )
}

export default Header