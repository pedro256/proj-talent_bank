import React from "react"
import { Col, Row } from "reactstrap"
import { Button } from "../../Components/Buttom"
import { DisplayFlexCentralizer, InputForm, InputGroup, MarginVerticalSimple, PaddingSimple, RegisterContainer, RegisterHeader } from "../../Styles/global"

export const RegisterUserPage: React.FC = ()=>{
    return(
        <DisplayFlexCentralizer>
            <MarginVerticalSimple>
                <RegisterContainer>
                    <Row>
                        <Col sm={12}>
                            <RegisterHeader>
                                <h2>CRIAR MINHA CONTA</h2>
                                <label>Caso já tenha uma conta vá para o login</label>
                            </RegisterHeader>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>NOME(COMPLETO)</label>
                                    </div>
                                    <div>
                                        <InputForm type="text" />
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                            
                        </Col> 
                        <Col sm={4}>
                            <InputGroup>
                                    <div>
                                        <label>NÚMERO PARA CONTATO</label>
                                    </div>
                                    <div>
                                        <InputForm type="number" />
                                    </div>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>EMAIL DA INSTITUIÇÃO</label>
                                    </div>
                                    <div>
                                        <InputForm type="email" />
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                            
                        </Col> 
                        <Col sm={4}>
                            <InputGroup>
                                    <div>
                                        <label>NÚMERO DE WHATSAPP</label>
                                    </div>
                                    <div>
                                        <InputForm type="number" />
                                    </div>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <PaddingSimple>
                            <InputGroup>
                                    <div>
                                        <label>IDENTIFICAÇÃO DA EMPRESA</label>
                                    </div>
                                    <div>
                                        <InputForm type="number" />
                                    </div>
                            </InputGroup>
                            </PaddingSimple>
                            
                        </Col> 
                        <Col sm={4}>
                            <Button>PROSSEGUIR</Button>
                        </Col>
                    </Row>
                </RegisterContainer>
            </MarginVerticalSimple>
        </DisplayFlexCentralizer>
    )
}