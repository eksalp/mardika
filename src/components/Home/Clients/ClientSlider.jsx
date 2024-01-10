import React from 'react'
import styled from 'styled-components'
import {IoIosQuote} from "react-icons/io";
// import {AiOutlineStar} from "react-icons/ai";

const ClientSlider = (props) => {
    const {name, position, img_url, disc} = props.item;
  return (
    <Container>
        <Header>
            <span className='quote'><IoIosQuote/></span>
        </Header>
        <Body>
            {disc}
        </Body>
        <Footer>
            <img src={img_url} alt={name} />
            <div className="details">
                <h1>{name}</h1>
                <p>{position}</p>
            </div>
        </Footer>
    </Container>
  )
}

export default ClientSlider

const Container = styled.div`
    background: #e5d489;
    padding: 1.5rem 1rem;
    margin: 0 1rem;
    border-radius: 10px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #024aad;
        opacity: 0.7;
    }

    .star{
        font-size: 1.3rem;
    }
`
const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
    color: #432284;
    text-align: justify;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 4rem;
        height: 4rem;
        border-radius: 50px;
        object-fit: cover;
    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        color: #BD4800;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: black;
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
`