import React from "react"
import { Col, Row } from "reactstrap"
import { DisplayFlexCentralizer, TextCentralizerFooter } from "../../Styles/global"
import { Footer, Title, TitleMain } from "./styles"

interface FooterProps{
    primary?:boolean
}
const FooterComponent:React.FC<FooterProps> = ({primary=false,children})=>{
    return(
        <Footer primary={primary}>
            <Row>
                <Col sm={3}>
                    <Title>CONTATOS</Title>
                </Col>
                <Col sm={6}>
                    <TitleMain>TALENT BANK</TitleMain>
                </Col>
                <Col sm={3}>
                    <Title>REDES SOCIAIS</Title>
                </Col>
            </Row>
            <DisplayFlexCentralizer>
                <div>
                    <TextCentralizerFooter>MANAUS/AM</TextCentralizerFooter>
                    <TextCentralizerFooter>2021</TextCentralizerFooter>
                </div>
            </DisplayFlexCentralizer>
        </Footer>
    )
}

export default FooterComponent