import { FaPersonBooth, FaCalendarDay, FaBed } from "react-icons/fa";
import React, { useState } from 'react'
import styled from 'styled-components'
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    background-color: #0e8557e5;
    color: #eee8e1f1;  
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
flex: 1;
margin: 20px 0px 100px 0px;
position: relative;
`

const Title = styled.h1`

`

const Desc = styled.p`
    margin: 20px 0;
`

const Button = styled.button`
    background-color: #0e8557e5;
    color: #eee8e1f1;  
    font-weight: 500;
    border: none; 
    padding: 10px;
    cursor: pointer;
`

const SearchContainer = styled.div`
 height: 30px;
background-color: white;
border: 3px solid slateblue;
display: flex;
align-items: center;
justify-content: space-around;
padding: 30px 0px;
border-radius: 10px;
position: absolute;
bottom:50px;
left: 300px;
width: 70%;

`

const Search = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Input = styled.input`
    border: none;
    outline: none;
`

const SearchText = styled.span`
    color: lightgray;
    cursor: pointer;
`

const D = styled.div`
    position: absolute;
    top:40px;
    z-index: 2;
`

const OptionButton = styled.button`
    width: 20px;
    height: 20px;
    border: 1px solid #0e8557e5;
    color: #0e8557e5;
    cursor: pointer;
`

export default function Header() {
    const [destination, setDestination] = React.useState("")
    const [visibleCalend, setVisibleCaled] = React.useState(false)
    const [date, setDate] = React.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [visibleRoom, setVisibleRoom] = React.useState(false)
    const [numRoom, setNumroom] = React.useState({
        room: 1
    })

    const handleCount = (sign) =>{
        setNumroom(prev=>{return{
            ...prev, 
            room: sign === "pos" ? numRoom.room + 1 : numRoom.room - 1,
        }})
    }

    const navigate = useNavigate()

    const handleSearch = () =>{
        navigate('/hotels', {state: {destination,date,numRoom}})
    }
    return (
        <Container>
            <Wrapper>
                <Title>Big discounts !!!</Title>
                <Desc>Get the best service</Desc>
                <Button>Sign in /Register</Button>
                <SearchContainer>
                    <Search>
                        <FaBed color='lightgray'></FaBed>
                        <Input onChange={e=>setDestination(e.target.value)} type='text' placeholder='where are you going?'></Input>
                    </Search>
                    <Search>
                        <FaCalendarDay color='lightgray'></FaCalendarDay>
                        <SearchText onClick={()=>setVisibleCaled(!visibleCalend)}>{
                            `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </SearchText>
                        {visibleCalend && <D>
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()} />
                        </D>}
                    </Search>
                    <Search>
                        <FaPersonBooth color='lightgray'></FaPersonBooth>
                        <SearchText >{`room ${numRoom.room}`}</SearchText>
                        <OptionButton disabled={numRoom.room < 2} onClick={()=>handleCount("neg")}>-</OptionButton>
                        <OptionButton onClick={()=>handleCount("pos")}>+</OptionButton>
                    </Search>
                    <Button onClick={handleSearch}>Search</Button>
                </SearchContainer>
            </Wrapper>

        </Container>
    )
}
