import React from 'react'
import styled from 'styled-components'
import Business from '../Image/Five.jpg'
import casino from '../Image/Casino.jpg'
import Resort from '../Image/Resort.jpg'
import Suite from '../Image/Suiet.jpg'

const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;justify-content: space-between;
    gap: 20px;
`

const ListItem = styled.div`
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Image = styled.img`
    flex: 1;
    object-fit: cover;
`

const TitleContainer = styled.div`

`
const Title = styled.h1`
    margin: 0;
    font-size: 18px;
    font-weight: bold;
`

const SubTitle = styled.h2`
    margin: 0;
    font-size: 14px;
    font-weight: 300;
`

export default function PropertyList() {
    return (
        <Container>
            <ListItem>
                <Image src={Business} />
                <TitleContainer>
                    <Title>Business</Title>
                    <SubTitle>40 hotels</SubTitle>
                </TitleContainer>
            </ListItem>
            <ListItem>
                <Image src={Resort} />
                <TitleContainer>
                    <Title>Resort</Title>
                    <SubTitle>80 hotels</SubTitle>
                </TitleContainer>
            </ListItem>
            <ListItem>
                <Image src={casino} />
                <TitleContainer>
                    <Title>Casino</Title>
                    <SubTitle>99 hotels</SubTitle>
                </TitleContainer>
            </ListItem>
            <ListItem>
                <Image src={Suite} />
                <TitleContainer>
                    <Title>Suite</Title>
                    <SubTitle>40 hotels</SubTitle>
                </TitleContainer>
            </ListItem>
        </Container>
    )
}
