import React, { useState } from "react"
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavLink } from "reactstrap"
import HeaderDiv, { TextNav } from "./styles"
import { NavDefault } from "./Navs"

const Header:React.FC = ()=> {
    
    const [isOpen, setIsOpen] = useState(false)
    //var { authenticated, handleLogout } = useContext(AuthContext)


    function toggle(): void {
        setIsOpen(!isOpen)
    }

    return(
        <HeaderDiv>
           <Navbar expand="md">
               <NavbarBrand>
               <NavLink href="/">
                    <TextNav>
                        BANCO DE TALENTOS
                    </TextNav>
                </NavLink>
                   
                </NavbarBrand>
            <NavbarToggler onClick={() => toggle()} >
                <TextNav >
                    BANCO DE TALENTOS
                </TextNav>
            </NavbarToggler>
            
            <Collapse isOpen={isOpen} navbar>
                <NavDefault />
            </Collapse>
            </Navbar> 
        </HeaderDiv>
    )
}

export default Header