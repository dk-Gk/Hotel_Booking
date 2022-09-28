import { StarBorder } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Im from '../Image/Hotel3.jpg'

const Container = styled.div`
border: 1px solid slateblue;
padding: 10px;
border-radius: 5px;
display: flex;
justify-content: space-between;
gap: 20px;
margin-bottom: 20px;
`

const Image = styled.img`
    height: 300px;
    object-fit: cover;
    flex: 2;
`

const Desc = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
flex: 1;
`

const Title = styled.h1`
    font-size: 20px;
    color:  #0e8557e5;
`

const Distance = styled.span`
    font-size: 15px;
`

const SubTitle = styled.span`
font-size: 15px;
font-weight: 800;
background-color: yellow;
`
const Price = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

const PriceIcon = styled.span`
    font-size: 15px;
`

const PriceText = styled.span`
    font-size: 15px;
`

const Rating = styled.span`
    font-size: 15px;
    font-weight: 800;
`

const SubRating = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const RatingIcon = styled.span`
color: yellow;
`

const RatingButton = styled.button`
background-color: #0e8557e5;
color: #eee8e1f1;  
font-weight: 500;
border: none;
`

const Button = styled.button`
background-color: #0e8557e5;
color: #eee8e1f1;  
font-weight: 800;
border: none; 
padding: 10px;
cursor: pointer;
width: 100%;
`

export default function ResultList() {
  return (
    <Container>
        <Image src={Im}/>
         <Desc>
             <Title>Haile Resort</Title>
             <Distance>100m from Airpot</Distance>
             <SubTitle>This our newest resort in Hawassa</SubTitle>
             <Price>
                 <PriceText>200</PriceText>
                 <PriceIcon>$</PriceIcon>
             </Price>
             <Rating>Rating</Rating>
             <SubRating>
                 <RatingButton>7.7</RatingButton>
                 <RatingIcon>
                     <StarBorder/>
                     <StarBorder/>
                     <StarBorder/>
                     <StarBorder/>
                     <StarBorder/>
                 </RatingIcon>
             </SubRating>
             <Button>Book now</Button>
         </Desc>
    </Container>
  )
} 
