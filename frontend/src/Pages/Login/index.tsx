import React from "react"
import { Col, Row } from "reactstrap"
import { Button } from "../../Components/Buttom"
import { ColorsPallet } from "../../Styles/colors"
import { DisplayFlexCentralizer, InputForm, MarginVerticalSimple,InputGroup } from "../../Styles/global"
import { DescriptionSideInfor, DividerSide, FormLogin, LoginContainer, SideInfor, TitleForm, TitleSideInfor } from "./styles"

export const LoginPage:React.FC = ()=>{
    return(
        <DisplayFlexCentralizer>
            <MarginVerticalSimple>
                
                <LoginContainer>
                    <Row>
                        <Col sm={7}>
                            <FormLogin>
                                <TitleForm>ENTRAR</TitleForm>
                                <InputGroup>
                                    <div>
                                        <label>EMAIL</label>
                                    </div>
                                    <div>
                                        <InputForm type="email" />
                                    </div>
                                </InputGroup>
                                
                                <InputGroup>
                                    <div>
                                        <label>SENHA</label>
                                    </div>
                                    <div>
                                        <InputForm type="password"/>
                                    </div>
                                </InputGroup>

                                <Button>PROSSEGUIR</Button>
                            </FormLogin>
                        </Col>
                        <Col sm={5}>
                            <SideInfor>
                                <TitleSideInfor>Olá recrutador</TitleSideInfor>
                                <DividerSide/>
                                <DescriptionSideInfor>é novo por aqui ? podemos te ajudar</DescriptionSideInfor>
                                <DisplayFlexCentralizer>
                                    <Button fontSize="24px">CRIAR CONTRA</Button>
                                </DisplayFlexCentralizer>
                                <DisplayFlexCentralizer>
                                    <Button fontColor={ColorsPallet.gray}>SOBRE O APP </Button>
                                </DisplayFlexCentralizer>
                            </SideInfor>
                        </Col>
                    </Row>
                </LoginContainer>
            </MarginVerticalSimple>
        </DisplayFlexCentralizer>
    )
}