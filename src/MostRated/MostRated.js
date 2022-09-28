import React from 'react'
import styled from 'styled-components'
import Rated from '../Image/Rated.jpg'

const Container = styled.div`
    width: 100%;
    max-width:1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

const MRItem = styled.div`
    flex: 1;
    gap: 10px;
    display: flex;
    flex-direction: column;
`

const Image = styled.img`
    width: 100%;
`

const Name = styled.span`
    font-weight: bold;
`

const City = styled.span`
    font-weight: 1; 
`

const Price = styled.span`
    font-weight: 500;
`

const Rating = styled.div`
    font-size: 14px;
`

const Button = styled.button`
    background-color: #0e8557e5;
    color: #eee8e1f1;
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
`

export default function MostRated() {
    return (
        <Container>
            <MRItem>
                <Image src={Rated} />
                <Name>Haile resort</Name>
                <City>Hawassa</City>
                <Price>Staring from $200</Price>
                <Rating>
                    <Button>7.5</Button>
                    <span>Excellent</span>
                </Rating>
            </MRItem>
            <MRItem>
                <Image src={Rated} />
                <Name>Haile resort</Name>
                <City>Hawassa</City>
                <Price>Staring from $200</Price>
                <Rating>
                    <Button>7.5</Button>
                    <span>Excellent</span>
                </Rating>
            </MRItem>
            <MRItem>
                <Image src={Rated} />
                <Name>Haile resort</Name>
                <City>Hawassa</City>
                <Price>Staring from $200</Price>
                <Rating>
                    <Button>7.5</Button>
                    <span>Excellent</span>
                </Rating>
            </MRItem>
        </Container>
    )
}
