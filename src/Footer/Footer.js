import { Facebook, Instagram, MailOutline, MapOutlined, Phone, Telegram, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
color: #0e8557e5;
`

const Desc = styled.p`
    margin: 20px 0;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    `

const Center = styled.div`
    flex:1;
    padding: 20px;
`

const Title = styled.h3`
 margin-bottom: 30px;
 color: #0e8557e5;
`

const List = styled.ul`
margin: 0px;
padding:0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const Listitem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>Hotel Booking</Logo>
            <Desc>This is the best Booking website in Our World</Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='3B5999'>
                    <Telegram/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>LInks</Title>
            <List>
                <Listitem>Contact</Listitem>
                <Listitem>Contact</Listitem>
                <Listitem>Contact</Listitem>
                <Listitem>Contact</Listitem>
                <Listitem>Contact</Listitem>
                <Listitem>Contact</Listitem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><MailOutline/>idkin19@gmail.com</ContactItem>
            <ContactItem><Phone/>+251 124 345 678</ContactItem>
            <ContactItem><MapOutlined/>Adiss Ababa, po.Box 2345</ContactItem>
        </Right>
    </Container>
  )
}
