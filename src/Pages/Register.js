import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#0e8557e5;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color:white;
padding: 20px 60px;
border-radius: 10px;

`

const Title = styled.h1`
color: #0e8557e5;
font-weight: bold;
`

const SubTitle = styled.span`
    color: slateblue;
    font-size: 12px;
    margin-top: 10px;
`

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 15px;
`

const Input = styled.input`
    padding: 10px;
    border:none;
    border-bottom: 1px solid slateblue;
    outline: none;
`

const Button = styled.button`
background-color:#0e8557e5;
color: white;
border:none;
padding: 10px;
font-weight: bold;
cursor: pointer;
`
const Link = styled.span`
cursor: pointer;
background-color:#0e8557e5;
color: white;
font-weight: bold;
`

export default function Register() {

    const navigate = useNavigate()

    const handleLink = () =>{
        navigate('/login')
    }
  return (
    <Container>
        <Wrapper>
            <Title>Register</Title>
            <Form>
                <Input type='text' placeholder='FirstName'/> 
                <Input type='text' placeholder='LastName'/> 
                <Input type='text' placeholder='UserName'/> 
                <Input type='email' placeholder='Email'/>
                <Input type='password' placeholder='Password'/>
                <Input type='password' placeholder='ConfirmPassword'/>
                <Button>Sign Up</Button>
            </Form>
            <SubTitle>You do have an account? <Link onClick={handleLink}>Login</Link></SubTitle>
        </Wrapper>
    </Container>
  )
}