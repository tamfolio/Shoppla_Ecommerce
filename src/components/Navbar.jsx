import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid molestias inventore possimus. Suscipit laborum dolorem sapiente deleniti voluptas id repudiandae dolores iure quaerat tempore! Laborum molestiae id repellendus perspiciatis!</Left>
            <Center>left</Center>
            <Right>left</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar