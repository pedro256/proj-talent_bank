import React from "react"
import { Col, Row } from "reactstrap"
import FooterComponent from "../../Components/Footer"
import Header from "../../Components/Header"
import { TalentSkillsDetail } from "../../Components/TalentSkillDetails"
import { DisplayFlexCentralizer, MarginVerticalSimple } from "../../Styles/global"
import { ContainerProfile, HeaderInfor } from "./styles"

export const TalentProfilePublic:React.FC = ()=>{
    return (
        <div>
            <Header />
            <DisplayFlexCentralizer>
                <MarginVerticalSimple margin="120px">
                    <ContainerProfile>
                        <Row>
                            <Col sm={3}>
                                <img src="" alt="profile" />
                            </Col>
                            <Col sm={9}>
                                <HeaderInfor>
                                    <h5>Nome do talento</h5>
                                    <p> descricçãpo</p>
                                </HeaderInfor>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <label>
                                    EMAIL(S)
                                </label>
                                <p>email 1</p>
                                <p>email 2</p>
                            </Col>
                            <Col sm={6}>
                                <label>
                                    CONTATO(S)
                                </label>
                                <p>contato 1</p>
                                <p>contato 2</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <label>ENDEREÇO</label>
                                <p>enderenço do talento na rua tal, cidade de tal lugar região metropolitana de tal lugar</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <TalentSkillsDetail/>
                            </Col>
                            <Col sm={6}>
                                <TalentSkillsDetail/>
                            </Col>
                            <Col sm={6}>
                                <TalentSkillsDetail/>
                            </Col>
                        </Row>
                    </ContainerProfile>
                </MarginVerticalSimple>
            </DisplayFlexCentralizer>
            <FooterComponent />
        </div>
    )
}