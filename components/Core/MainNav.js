import React, { useState, Fragment,Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

const StyledNavItem = styled(NavItem)`
    text-align:center;
	font-weight:400;

	@media (min-width:1024px) {
    	text-decoration: none;
    	height: 100%;
	}
`

const StyledNavLink = styled(NavLink)`
	font-size: 14px;
  	color : white;
	
	:hover {
		color: black;
	}
  	@media (min-width: 1024px) {
	 	/* padding : 34px 24.5px 31px 24.5px; */
		width:160px !important;
		height: inherit !important;
		font-size: 16px;
		line-height: 48px;
		font-family: 'Prompt-medium', sans-serif;
		:hover {
		background-color: whitesmoke;
		transition: background 0.5s ease-in-out;
		}
  	}
  
`
const ColorNav = styled(Navbar)`
  margin: 0;
  padding: 0;
  background-color : #14B0BF;
  transition : 0.5s ease-in-out;
  -webkit-transition : 0.45s ease-in-out;
  

  @media (min-width: 1024px) {
	height: 86px;
	background-color : rgba(196, 196, 196, 0.0);
  }
  
`

const StyledNav = styled(Nav)`

	@media (min-width: 1024px) {
		width: 100%;
		height: inherit;
		display: flex;
		justify-content: center ; 

	}
`
const MainNavContainer = styled.div`
	display:none;
	@media (min-width: 1024px) {
		display: block
	}
`

export default class MainNav extends Component {
	state = {
		noBg: 'rgba(255, 255, 255, 0.0)',
		defaultMobile: 'darkgrey',
		defaultDesktop: '#14B0BF',
		isDesktop: true
	}

listenScrollEvent = () => {

	if (window.innerWidth >= 1024 && this.state.isDesktop) {
		if (window.scrollY > 100) {
			document.getElementById('navcolor').style.backgroundColor = this.state.defaultDesktop
			document.getElementById('navcolor').style.height = '65px'
			document.getElementById('navcolor').style.lineHeight = '50px'
		} else {
			document.getElementById('navcolor').style.backgroundColor = this.state.noBg
			document.getElementById('navcolor').style.height = '89px'
			document.getElementById('navcolor').style.lineHeight = '70px'
		}
	}
}

updateWindowDimensions = () => {
	if (window.innerWidth < 1024) {
		this.setState({ isDesktop: false})
	}else if (window.innerWidth >= 1024) {
		this.setState({ isDesktop: true})
		if(window.scrollY > 100){
		document.getElementById('navcolor').style.backgroundColor = this.state.defaultDesktop
		document.getElementById('navcolor').style.height = '65px'
		}
	} 
}

componentDidMount() {
	window.addEventListener('resize', this.updateWindowDimensions)
	window.addEventListener('scroll', this.listenScrollEvent)
}


	render() {
		return (
			<MainNavContainer className='fixed-top'>
			<ColorNav expand="lg" id="navcolor">
					<div style={{width:'100%',display:'flex',justifyContent:'center'}}>
					<StyledNav navbar>
						<StyledNavItem>
								<StyledNavLink href="#home">HOME</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
								<StyledNavLink href="#what">WHAT</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="#track">TRACK</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="#when">WHEN</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="#faqs">FAQS</StyledNavLink>
						</StyledNavItem>
					</StyledNav>
					</div>
			</ColorNav>
		</MainNavContainer>
		)
	}
}



// const Navbar1 = (props) => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggle = () => setIsOpen(!isOpen);

// 	const changeIconToX = () => {
// 		var hamberger = document.getElementById("hamberger");
// 		var close = document.getElementById("close");
// 		var bgcolor = document.getElementById("bgcolor");
// 		if (isOpen == false) {
// 			hamberger.style.display = 'none';
// 			close.style.display = 'inline';
// 			bgcolor.style.backgroundColor = '#918686';
// 		} 
// 	}

// 	const changeIconToHamberg = () => {
// 		var hamberger = document.getElementById("hamberger");
// 		var close = document.getElementById("close");
// 		var bgcolor = document.getElementById("bgcolor");
// 		if (isOpen == true) {
// 			hamberger.style.display = 'inline';
// 			close.style.display = 'none';
// 			bgcolor.style.backgroundColor = '#c4c4c4'
// 		}
// 	}


// 	return (
// 		<div className="sticky-top">
// 			<ColorNav expand="lg" id="bgcolor">
// 				<NavMobile>
// 					<StyledNavbarToggler onClick={() => { toggle(); changeIconToX();}} id="hamberger"/>
// 					<StyledNavbarTogglerOpen  onClick={() => { toggle(); changeIconToHamberg();}} id="close" />
// 					<StyledNavbarBrand href="/">
// 						<StyledImg src="/img/Logo2.png" />
// 					</StyledNavbarBrand>
// 					<RegisterButton color="tranparent">
// 						<StyledNavLink2 href="/" >REGISTER</StyledNavLink2>
// 					</RegisterButton>
// 				</NavMobile>
// 				<Collapse isOpen={isOpen} navbar>
// 					<div style={{width:'100%',display:'flex',justifyContent:'center'}}>
// 					<StyledNav navbar>
// 						<StyledNavItem>
// 							<Link href="/index">
// 								<StyledNavLink href="/" >HOME</StyledNavLink>
// 							</Link>
// 							<Line></Line>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<Link href="./App">
// 								<StyledNavLink href="/">WHAT</StyledNavLink>
// 							</Link>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/">WHO</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/">BRANCH</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/Where">WHERE</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/When">WHEN</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/">FAQS</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/">GAME</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/contact">CONTACT</StyledNavLink>
// 						</StyledNavItem>
// 					</StyledNav>
// 					</div>
// 					<PlaceHolder></PlaceHolder>
// 				</Collapse>

// 			</ColorNav>
// 		</div>


// 	);
// }