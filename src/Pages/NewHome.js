import React from "react";
import Navbar from "../NewNav/Navbar";
import Header from "../Header/Header";
import styled from "styled-components";
import Featured from "../Featured/Featured";
import PropertyList from "../PropertyList/PropertyList";
import MostRated from "../MostRated/MostRated";
import MailList from "../MailList/MailList";
import Footer from "../Footer/Footer";


const Container = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`

const Title = styled.h1`
    width: 1024px;
    font-size:20px
`


export default function Home(){
    
    return(
        <div>
            <Navbar />
            <Header/>
            <Container>
                <Title>Cities</Title>
                <Featured/>
                <Title>Catagories</Title>
                <PropertyList/>
                <Title>Most Rated</Title>
                <MostRated/>
                <MailList/>
                <Footer/>
            </Container>
        </div>
    )
}