import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin-top: 50px;
    background-color: #0e8557e5;
    color: #eee8e1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
const Title = styled.h1`
`
const Desc = styled.div`
`
const InputContainer = styled.div`
    margin-bottom: 10px;
    
`
const Input = styled.input`
    width: 300px;
    height: 30px;
    padding: 20px;
    border: none;
    margin-right: 10px;
`
const Button = styled.button`
    height: 30px;
    background-color: #0e8557e5;
    color: #eee8e1f1;
    font-weight: 500;
    border: none;
    cursor: pointer;
`

export default function MailList() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Sign up now and we will send you deatils.</Desc>
        <InputContainer>
            <Input type='text' placeholder='Your email' />
            <Button>Subscribe</Button>
        </InputContainer>
    </Container>
  )
}
