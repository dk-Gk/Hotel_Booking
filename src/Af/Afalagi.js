import React from 'react'
import styled from 'styled-components'
import i from '../Image/sweet.jpg'

const Container = styled.div`
    display:flex;
`

const Wrapper = styled.div`
    dispay: flex;
    flex-direction: column;
    margin-left: 40%;
    width:50%;
    height: 100%;
`

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    height:20%;
    width: 50%;
    align-items: center;
`

// const ImageContainer = styled.div`
//     width: 100;
//     height: 100;
//     background-color: green;
// `

const Image = styled.img`
    border-radius: 50%;
    width:150px;
    height:150px;
    cursor: pointer;
`

const Desc = styled.p``

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const Lable = styled.label`
`

const Input = styled.input`
    margin-bottom: 10px;
    border: 1px solid #ccc;
`

const Button = styled.button`
    margin-right: 25%;
    margin-left: 25%;
    border-radius: 50%;
    height: 50px;
    width:50px;
    cursor: pointer;
    background-color: brown;
`

export default function Afalagi() {
    return (
        <Container>
            <Wrapper>

                <Profile>

                    <Image src={i} />
                    <Desc>hdcjdcjdcjnsdjkcnjhdbcjhdcb</Desc>
                </Profile>
                <Form>
                    <Lable>Lost item</Lable>
                    <Input />
                    <Lable>Date of losse</Lable>
                    <Input />
                    <Lable>Details</Lable>
                    <Input />
                    <Lable>Other</Lable>
                    <Input />
                    <Button >Submmit</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
