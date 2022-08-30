import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import {sliderItems} from './data';

const Container = styled.div`
    width: 100%;
    height:100vh;
    display:flex; 
    position: relative;
    overflow: hidden;  
`;

const Wrapper = styled.div`
    height: 100px;
    display: flex;
    transform: translateX(0vw);
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`;

const Slide = styled.div`
    width: 100wv;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background: transparent;
    cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState (0);
  const handleClick = direction => {};
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick ('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        {sliderItems.map (item => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>
                {item.desc}
              </Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}

      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick ('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
