import React from "react"
import { Col, Row } from "reactstrap"
import { Button } from "../../Components/Buttom"
import { DisplayFlexCentralizer, InputForm, InputGroup, MarginVerticalSimple, PaddingSimple, RegisterContainer, RegisterHeader } from "../../Styles/global"

export const RegisterTalentPage: React.FC = ()=>{
    return(
        <DisplayFlexCentralizer>
            <MarginVerticalSimple>
                <RegisterContainer>
                    <Row>
                        <Col sm={12}>
                            <RegisterHeader>
                                <h2>CRIAR NOVO TALENTO</h2>
                            </RegisterHeader>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>NOME</label>
                                    </div>
                                    <div>
                                        <InputForm type="text" />
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>DESCRIÇÃO</label>
                                    </div>
                                    <div>
                                        <InputForm type="text" />
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>NUMERO PARA CONTATO</label>
                                    </div>
                                    <div>
                                        <InputForm type="number" />
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                            
                        </Col> 
                        <Col sm={6}>
                        <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>NUMERO PARA WHATSAPP</label>
                                    </div>
                                    <div>
                                        <InputForm type="number" />
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col sm={6}>
                            <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>EMAIL PRINCIPAL</label>
                                    </div>
                                    <div>
                                        <InputForm type="email" />
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                            
                        </Col> 
                        <Col sm={6}>
                        <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>EMAIL SECUNDÁRIO</label>
                                    </div>
                                    <div>
                                        <InputForm type="email" />
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>ENDEREÇO</label>
                                    </div>
                                    <div>
                                        <InputForm type="text" />
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>DATA DE ANIVERSÁRIO</label>
                                    </div>
                                    <div>
                                        <InputForm type="date" />
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>HABILIDADES</label>
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                            
                        </Col>
                    </Row>
                </RegisterContainer>
            </MarginVerticalSimple>
        </DisplayFlexCentralizer>
    )
}