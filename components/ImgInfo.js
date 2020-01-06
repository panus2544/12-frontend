import React, { Component } from 'react'
import styled from 'styled-components'
import { Content } from './Text'

const Image = styled.img`
margin-right: 5%;
width: 30%;
`
export default class ImgInfo extends Component {
    render() {
        return (
            
            <div className="media">
                <Image src={this.props.src} />
                <div className="media-body">
                    <Content 
                        content={this.props.info || "Unknow"}
                        color={this.props.color}
                        />  
                </div>
            </div>
           
        )
    }
}