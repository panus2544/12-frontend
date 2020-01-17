import React , { Component } from 'react'
import { Content } from '../Core/Text'
import styled, { keyframes } from 'styled-components'

const glow = keyframes`
    from { filter:drop-shadow(0px 0px 5px rgba(255,255,255,0.7));}
    to {filter:drop-shadow(0px 0px 10px rgba(255,255,255,1));}
`
const Image = styled.img`
margin-left: 32.5%;
margin-bottom: -17.5%;
`
const ImageWho = styled.img`
animation: ${glow} 2s ease-in-out alternate infinite;
`

const TextBox = styled.div`
border: 3px solid white;
border-radius: 10px;
padding: 20% 10% 10% 10%;
margin-bottom: 20%;
`

class ImageInfo extends Component {
 render() {
    return(
    
        <div>
            <Image src={this.props.src}/>
            <TextBox>
                <Content 
               content={this.props.content || "Unknow"}
               color={this.props.color}
               />
            </TextBox>

        </div>

        )
}}
class ImageInfoGlow extends Component {
    render() {
       return(
           <div className="media mt-3">
               <ImageWho src={this.props.src} />
               <div className="mt-1 ml-4"><Content 
               content={this.props.content || "Unknow"}
               color={this.props.color}
               />
               </div>
   </div>
   
           )
   }}
   export {ImageInfo,
    ImageInfoGlow,};