import React, { Component } from 'react'
import styled from 'styled-components'
import { WhatImage } from '../What/WhatImage'
import Flippy from './Track'

const Wrap = styled.div`
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    width: 100%;
    position: relative;
    z-index: 1;
    ::-webkit-scrollbar {
         width: 0px;
    }
`

const ArrowButton = styled.div`
    height: 62.68px;
    width: 63.5px;
    align-items: center;
    justify-content: center;
    background: rgba(134, 134, 134, 0.68);
    border-radius: 50%;
    cursor: pointer;
    color: white;
    display: none;
  
    @media (min-width: 1024px) {
        display: flex;
    }
`

const next = {
    position: 'absolute',
    fill: 'white',
    top: '133px',
    right: '17.95px',
    zIndex: '3',
}

const marginCards = styled.div`
    margin:0px 10px 0px 10px;
`

const RightArrow = (props) => {
    return (
        <ArrowButton onClick={props.goToNextSlide} style={next}>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24.93" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z" /></svg>
        </ArrowButton>
    );
}

export default class SideScroll extends Component {
    state = {
        images: [
            { src: "img/temp.jpg" },
            { src: "img/temp.jpg" },
            { src: "img/temp.jpg" },
            { src: "img/temp.jpg" },
            { src: "img/temp.jpg" },
            { src: "img/temp.jpg" },
            { src: "img/temp.jpg" },
            { src: "img/temp.jpg" }
        ],
        currentIndex: 0,
        translateValue: 0
    };

    goToNextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return (document.querySelector('.slide').clientWidth + 20)
    }

    render() {

        return (
            <div style={{ position: 'relative', zIndex: '2' }} className="scroll-container">
                <Wrap >
                    <div
                        style={{
                            display: 'flex',
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.45s',
                            padding: '0px',
                            margin: '0px',
                        }}>
                        {this.state.images.map((data, key) => (
                            
                            <Flippy />
                            
                        ))}
                    </div>
                </Wrap>
                <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
        )
    }
}
