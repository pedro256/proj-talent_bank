import React from "react"
import { Col,Nav, NavItem, NavLink, Row } from "reactstrap"
import { CenterItens, DivNavItens, TextNav } from "./styles"
import {CgProfile} from 'react-icons/cg'

export const NavDefault: React.FC = () => {
  return (
    <DivNavItens>
      <CenterItens>
        <Row>
          <Col sm={6}>
            <Nav className="justify-content-center" navbar >
              <NavItem>
                <NavLink href="/talents">
                  <TextNav>
                    TALENTOS
                  </TextNav>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={6}>
            <Nav className="justify-content-center" navbar >
              <NavItem>
                <NavLink href="/skills">
                  <TextNav>
                    HABILIDADES
                  </TextNav>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </CenterItens>
      <div>
        <CgProfile size={32} />
      </div>
    </DivNavItens>

  )
}
