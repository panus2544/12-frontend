import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap'
import Flippycardnaja from '../Core/FlippyCard'

export default class Trackpage extends Component {
    render() {
        return (
 
                    <Flippycardnaja
                                srcFront='img/temp.jpg'
                                srcBack='img/lungtu.png'
                            />
        )
    }
}
