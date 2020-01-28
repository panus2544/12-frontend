import React from 'react'
import styled from 'styled-components'

const HeadLine = styled.h1`
    font-family: 'Prompt-Medium', sans-serif;
    font-size: 40px;
    letter-spacing: 0.1em;
    color: ${props => props.color};
    text-align: ${props => props.textAlign || "center"};

    @media (min-width: 768px) {
        font-size: 120px;
    }

    @media (min-width: 1024px) {
        font-size: 110px;
    }
`

const SubHead = styled.h2`
    font-family: 'Prompt-Light', sans-serif;
    font-size: 14px;
    text-align: center;
    color: ${props => props.color};

    @media (min-width: 768px) {
        font-size: 35px;
    }
`

const ContentText = styled.p`
    font-family: "ChakraPetch-Regular", sans-serif;
    font-size: 12px;
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    text-indent: ${props => props.textIndent};
    padding: ${props => props.padding};
    line-height: 18px;

    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 26px;
        text-align: ${props => props.textAlignResponsive};
        text-indent: ${props => props.textIndentIpad};
    }

    @media (min-width: 1024px) {
        line-height: 35px;
        text-indent: ${props => props.textIndentDesktop};
    }
`

export const Header = (props) => {
    return (
    <HeadLine color = {props.color}
    textAlign = {props.textAlign}
    >
        {props.headerText}
    </HeadLine>
    )
}

export const SubHeader = (props) => {
    return (
        <SubHead color = {props.color}>
            {props.subHeaderText}
        </SubHead>
    )
}

export const Content = (props) => {
    return (
        <ContentText color = {props.color}
         textAlign = {props.textAlign}
          textIndent = {props.textIndent}
          textIndentIpad = {props.textIndentIpad}
          textIndentDesktop = {props.textIndentDesktop}
          textAlignResponsive = {props.textAlignResponsive}
           padding = {props.padding}
           >
               
            {props.content}
        </ContentText>
    )
}




