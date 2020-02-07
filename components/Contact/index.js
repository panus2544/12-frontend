import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, } from 'reactstrap'
import styled from 'styled-components'
import Link from 'next/link'
import { Parallax } from 'react-scroll-parallax'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactBg = styled.div`
    display: table;
    height: 80vh;
    padding-top: 8rem;
    padding-bottom: 15em;
    position: relative;
    width: 100%;
    background-size: cover;
    @media (min-width:768px){ 
      padding-bottom: 20em;
}
@media (min-width:1100px){ 
      padding-bottom: 30em;
}
`
const ContactImg = styled.img`
width:2.5em;
height:2.5em;
margin-right:1.063em;
text-align:left;
border-radius: 0em;

@media (min-width:768px){ 
margin-right:17px;
}

@media (min-width: 992px) {
width:3.75em;
height:3.75em; 
margin-right:14px;
}
`
const TextBox = styled.div`
color: white;
margin: 25px 0px 25px 0px;
flex-wrap: wrap;
width: 100%;
font-size: 12px;
line-height: 18px;
display:block;
text-align:left;
text-indent: 0.625em;

@media (min-width: 768px) {
  font-size: 20px;
  margin: 24px 0px 24px 0px;
  line-height: 28px;
  text-indent: 10px;
  
}

@media (min-width: 992px) {
  font-size: 20px;
  line-height: 28px;
  margin: 25px 0px 25px 0px;
}
`
const StyledLink = styled.a`
color: white !important;
text-decoration: none !important;
font-family: 'Sarabun-Regular', sans-serif;
font-size: 20px;
`
const HeaderStyled = styled.div`
font-family: 'NotoSans-Regular', sans-serif;
color:white;
display:block;
font-style: normal;
text-align:center;
font-weight: 500;
font-size: 36px;
line-height: 49px;

@media (min-width: 768px) {
  font-size: 64px;
  line-height: 109px;
  text-align:left;
  line-height: 65px;
}

@media (min-width: 992px) {
  font-weight: normal;
  font-size: 64px;
  line-height: 65px;
}
`


const ImgObject = styled.img`
  display:none;

  @media (min-width: 768px) {
    width:17.313em;
    display:inherit;
  }

  @media (min-width: 992px) {
    width: 25em;
    display:inherit;
  }
 
`

const Mountain = styled.img`
  position: absolute;
  bottom: 0;
  width: 100vw;
`
const Tower = styled.img`
  position: absolute;
  bottom: 20vw;
  left: 3em;
  width: 13vw;
`

const Star = styled.img`
  position: absolute;
  top: 35vh;
  left: 75vw;
  width: 10vw;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`

const Star2 = styled(Star)`
  top: 15vh;
  left: 68vw;
  width: 5vw;
`

const Star3 = styled(Star2)`
  top: 25vh;
  left: 45vw;
  width: 8vw;
`

const Star4 = styled(Star3)`
  top: 55vh;
  left: 38vw;
`

const Star5 = styled(Star4)`
  top: 70vh;
  left: 30vw;
`

const WrapContact = styled.div`
    padding-left: 3vw;

    @media (min-width: 360px) {
      padding-left: 8vw;
    }

    @media (min-width: 375px) {
      padding-left: 9vw;
    }

    @media (min-width: 411px) {
      padding-left: 13vw;
    }

    @media (min-width: 768px) {
      padding-left: 0vw;
    }
`

const WrapFollow = styled.div`
  padding-left: 15vw;

  @media (min-width: 360px) {
    padding-left: 18vw;
  }

  @media (min-width: 375px) {
    padding-left: 21vw;
  }

  @media (min-width: 411px) {
    padding-left: 24vw;
  }

  @media (min-width: 768px) {
    padding-left: 0vw;
  }
`


export default class contact extends Component {
  componentDidMount() {
    AOS.init({
      duration: 3000
    })
  }
  render() {
    return (
      <ContactBg>
          <Star src="/img/Contact/star1.png" />
          <Star2 src="/img/Contact/star2.png" />
          <Star3 src="/img/Contact/star3.png" />
          <Star4 src="/img/Contact/star4.png" />
          <Star5 src="/img/Contact/star5.png" />
        <Container>

          <Row>

            <Col xl="6" lg="6" md="6" sm="12" xs="12">
              <HeaderStyled>Contact</HeaderStyled>
              <WrapContact>
                <TextBox>
                  <StyledLink href="https://m.me/wipcamp" target="_blank">
                    <ContactImg src="img/Contact/messenger.png" />
                    MESSENGER
                    </StyledLink>
                </TextBox>
                <TextBox>
                  <StyledLink href="tel://0922687835">
                    <ContactImg src="img/Contact/tel.png" />
                    092-268-7835 (พี่ปลาย)
                    </StyledLink>
                </TextBox>
                <TextBox>
                  <StyledLink href="mailto:wippo@wipcamp.com" target="_blank">
                    <ContactImg src="img/Contact/email.png" />
                    wippo@wipcamp.com
                    </StyledLink>
                </TextBox>
                <TextBox>
                  <StyledLink href="https://line.me/R/ti/p/%40wipcamp" target="_blank">
                    <ContactImg src="img/Contact/line.png" />
                    @wipcamp
                    </StyledLink>
                </TextBox>
              </WrapContact>
            </Col>
            <Col xl="6" lg="6" md="6" sm="12" xs="12"></Col>

          </Row>


          <Row>
            <Col xl="6" lg="6" md="6" sm="12" xs="12"></Col>
            <Col xl="6" lg="6" md="6" sm="12" xs="12">
              <HeaderStyled>Follow Us</HeaderStyled>
              <WrapFollow>
                <TextBox>
                  <StyledLink href="https://www.facebook.com/wipcamp/" target="_blank">
                    <ContactImg src="img/Contact/facebook.png" />
                    WIP Camp
                    </StyledLink>
                </TextBox>
                <TextBox>
                  <StyledLink href="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" target="_blank">
                    <ContactImg src="img/Contact/youtube.png" />
                    WIP camp
                    </StyledLink>
                </TextBox>
                <TextBox>
                  <StyledLink href="https://www.instagram.com/wipcamp/" target="_blank">
                    <ContactImg src="img/Contact/instagram.png" />
                    wipcamp
                    </StyledLink>
                </TextBox>
              </WrapFollow>
            </Col>
          </Row>
          <Row>

          </Row>

        </Container>

        <Mountain src="/img/Contact/mountain.png" />
      </ContactBg >

    )
  }
}
