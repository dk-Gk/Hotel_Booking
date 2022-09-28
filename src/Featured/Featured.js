import React from 'react'
import styled from 'styled-components'
import Adiss from '../Image/Adiss.jpg'
import Adama from '../Image/Adama.jfif'
import Hawassa from '../Image/Hawassa.png'
import Bahirdar from '../Image/Bahirdar.jfif'

const Container = styled.div`
    width: 100%;
    max-width:1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

const FeaturedItem = styled.div`
    position: relative;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 250px;
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height:100%;
    object-fit: cover;
`

const TitleContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
`
const Title = styled.h1`
    margin: 0;
    font-size: 25px;
    font-weight: 800;
`

const SubTitle = styled.h2`
    font-size: 16px;
    margin: 0;
`



export default function Featured() {
    return (
        <Container>
            <FeaturedItem>
                <Image src={Adiss} />
                <TitleContainer>
                    <Title>Adiss</Title>
                    <SubTitle>12 bdb</SubTitle>
                </TitleContainer>
            </FeaturedItem>
            <FeaturedItem>
                <Image src={Hawassa} />
                <TitleContainer>
                    <Title>Hawassa</Title>
                    <SubTitle>12 bdb</SubTitle>
                </TitleContainer>
            </FeaturedItem>
            <FeaturedItem>
                <Image src={Adama} />
                <TitleContainer>
                    <Title>Adama</Title>
                    <SubTitle>12 bdb</SubTitle>
                </TitleContainer>
            </FeaturedItem>
            <FeaturedItem>
                <Image src={Bahirdar} />
                <TitleContainer>
                    <Title>Bahirdar</Title>
                    <SubTitle>12 bdb</SubTitle>
                </TitleContainer>
            </FeaturedItem>
        </Container>
    )
}
