import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import { size } from "../style/media";

const Container = styled.div`
  padding-top: 20vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.h1`
  width: 100%;
  font-weight: 500;
  font-size: 64px;
  line-height: 52px;
  text-align: center;
  @media (max-width: ${size.large}) {
    font-weight: 500;
    font-size: 40px;
  }
`

const SecondaryTitle = styled.h2`
  width: 100%;
  font-weight: 500;
  font-size: 64px;
  line-height: 52px;
  text-align: center;
  @media (max-width: ${size.large}) {
    font-weight: 500;
    font-size: 40px;
  }
`

const SubTitle = styled.h2`
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin: 5vw 15%;
  @media (max-width: ${size.large}) {
    margin: 3vw 15% 5vw 15%;
    font-size: 16px;
    line-height: 20px;
  }
`

const Button = styled.button`
  width: 20vw;
  height: 4.5vw;
  font-size: 20px;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  border: 0;
  align-self: center;
  &:hover {
    cursor: pointer;
    border-radius: 0px;
  } 
  @media (max-width: ${size.large}) {
      width: 30vw;
      height: 3vw;
      font-size: 15px;
  }
`

const StyledLink = styled(NavLink)`
  font-size: 18px;
  align-self: center;
  text-decoration: none;
  color: unset;
  transition: .2s;
  &:hover{
      background-color: rgba(0, 0, 0, .85);
      transition: .3s;
      color: rgb(255, 255, 255);
  }
`

const A = styled.a`
  text-decoration: none;
  color: unset;
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
`

const shadow = styled.div`
  box-shadow: 1200px 300px 0px 0px rgba(0, 0, 0, .85) inset;
  opacity: 0;
  transition: .1s;
  z-index: 10;
  width: 100%;
  &:hover{
      opacity: 1;
      transition: .3s;
  }
`

export { Container, Title, SubTitle, Button, StyledLink, A, List, SecondaryTitle, shadow }