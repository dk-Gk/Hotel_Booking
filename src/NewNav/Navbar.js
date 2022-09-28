import React from "react";
import { IoMdNotifications } from "react-icons/io";
import B, { Badge } from '@mui/material'
import CollectionsBookmarkSharpIcon from '@mui/icons-material/CollectionsBookmarkSharp';
import styled from 'styled-components'
import logo from '../Image/logolb.png';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    height: 60px;
    background-color:#0e8557e5;
    font-size: 18px;
    color: white;
    font-weight: 800;
    font-size: 16px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    text-align: center;
`

const Logo = styled.img`
    width: 45px;
    cursor: pointer;
`
const Center = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`

const Text = styled.h1`
    font-size: 20px;
`

const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
`

const BookIcon = styled.div`
    display: flex;
    margin-left: 15px;
`

export default function Navbar() {

    const navigate = useNavigate()

    const handleAuth = (type) =>{
        if(type === 'R'){
            navigate('/register')
        }else{
            navigate('/login')
        }
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo src={logo}></Logo>
                    <Text>Hotel BookIng</Text>
                </Left>
                <Center>
                </Center>
                <Right>
                    <MenuItem onClick={()=>handleAuth("R")}>Register</MenuItem>
                    <MenuItem onClick={()=>handleAuth("L")}>LOGIN</MenuItem>
                    <MenuItem>
                        <IoMdNotifications></IoMdNotifications>
                    </MenuItem>
                    <BookIcon>
                        <CollectionsBookmarkSharpIcon></CollectionsBookmarkSharpIcon>
                    </BookIcon>
                </Right>
            </Wrapper>
        </Container>
    )
}