import { format } from 'date-fns'
import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../NewNav/Navbar'
import { DateRange } from "react-date-range";
import ResultList from '../ResultList/ResultList'

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024;
  display: flex;
  gap: 20px;
  margin-left: 40px;
`
const EditButton = styled.div`
flex: 1;
background-color: #0e8557e5;
color: #eee8e1f1;  
font-weight: 500;
border: none; 
padding: 10px;
cursor: pointer;
width: 100%;
position: sticky;
height: max-content;
top: 50%;
text-align: center;
`

const ListSearch = styled.div`
  flex: 1;
  background-color: slateblue;
  padding-left: 10px;
  padding-right: 10px;
  position: sticky;
  height: 480px;
  top: 10px;
`

const Title = styled.h1`
`

const ListItem = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-bottom: 10px;
`

const Label = styled.label`
font-size: 16px;
`

const Input = styled.input`
height:30px;
border: none;
padding: 5px;
`

const Text = styled.span`
height:30px;
padding: 5px;
background-color: white;
display: flex;
align-items: center;
cursor: pointer;
`

const D = styled.div`
`

const OptionList = styled.div`
margin-bottom: 20px;
display: flex;
justify-content: space-between;
font-size: 12px;
`

const OptionHeader = styled.h3``

const OptionText = styled.span``

const OptionInput = styled.input`
width: 50px;
`
const Button = styled.button`
background-color: #0e8557e5;
color: #eee8e1f1;  
font-weight: 500;
border: none; 
padding: 10px;
cursor: pointer;
width: 100%;
`
const HideButton = styled.div`
background-color: slateblue;
color: #eee8e1f1;  
font-weight: 500;
border: none; 
padding: 10px;
cursor: pointer;
width: 50%;
height: max-content;
text-align: center;
position: absolute;
bottom: -50px;
margin-left: 25%;
`

const ListResult = styled.div`
  flex: 3;
`

export default function List() {
  const location = useLocation()
  const [destination, setDestination] = React.useState(location.state.destination)
  const [date, setDate] = React.useState(location.state.date)
  const [numRoom, setNumRoom] = React.useState(location.state.numRoom)
  const [visibleCalend, setVisibleCaled] = React.useState(false)
  const [visibleSearch, setVisibleSearch] = React.useState(false)
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          {!visibleSearch && <EditButton onClick={()=>setVisibleSearch(!visibleSearch)}>Edit Search</EditButton>}
          {visibleSearch && <ListSearch>
            <Title>Search</Title>
            <ListItem>
              <Label>Destination</Label>
              <Input type='text' placeholder={destination} />
            </ListItem>
            <ListItem>
              <Label>Check-in-date</Label>
              <Text onClick={()=>setVisibleCaled(!visibleCalend)}>{
                `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </Text>
              {visibleCalend && <D>
                <DateRange
                  onChange={item => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()} />
              </D>}
            </ListItem>
            <ListItem>
              <OptionHeader>Room Options</OptionHeader>
              <OptionList>
                <OptionText>Min Price</OptionText>
                <OptionInput type='number'/>
              </OptionList>
              <OptionList>
                <OptionText>Max Price</OptionText>
                <OptionInput type='number'/>
              </OptionList>
              <OptionList>
                <OptionText>Room</OptionText>
                <OptionInput type='number' placeholder={numRoom.room} min={1}/>
              </OptionList>
            </ListItem>
            <Button>Search</Button>
            <HideButton onClick={()=>setVisibleSearch(!visibleSearch)}>Hide</HideButton>
          </ListSearch>
         }
          <ListResult>
            <ResultList/>
            <ResultList/>
            <ResultList/>
            <ResultList/>
            <ResultList/>
          </ListResult>
        </Wrapper>
      </Container>
    </div>
  )
}
