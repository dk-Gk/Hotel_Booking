import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-weight: bold;
    font-stretch: extra-expanded;
`

const Desc = styled.span``

export default function Main() {
  return (
    <Container>
        <Title>We will help You Find it</Title>
        <Desc>Just ask as !!!</Desc>
    </Container>
  )
}
