import { Col, Row } from "reactstrap"
import { Button } from "../../Components/Buttom"
import { DisplayFlexCentralizer, InputForm, InputGroup, MarginVerticalSimple, PaddingSimple, RegisterContainer, RegisterHeader } from "../../Styles/global"

export const RegisterSkillPage: React.FC = ()=>{
    return(
        <DisplayFlexCentralizer>
            <MarginVerticalSimple>
                <RegisterContainer>
                    <Row>
                        <Col sm={12}>
                            <RegisterHeader>
                                <h2>CRIAR NOVA HABILIDADE</h2>
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
                        
                        <Col sm={12}>
                            <Button>PROSSEGUIR</Button>
                        </Col>
                    </Row>
                </RegisterContainer>
            </MarginVerticalSimple>
        </DisplayFlexCentralizer>
    )
}