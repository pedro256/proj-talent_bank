import React, { useEffect, useState } from "react"
import { AreaNew, DisplayFlexCentralizer, Input, MarginVerticalSimple, PaddingSimple, TitleTopic } from "../../Styles/global"
import { AiOutlinePlus } from 'react-icons/ai'
import AreaSelection from "../../Components/AreaSelection"
import { Col, Row } from "reactstrap"
import { api } from "../../Api"
import { Skill } from "../../Models/Skills"
import { CardDefault } from "../../Components/Cards/CardDefault"
import { NoContent } from "../../Components/FeedbackMsg/NotContent"
import FooterComponent from "../../Components/Footer"
import Header from "../../Components/Header"

const SkillsPage: React.FC = () => {

    const [otherSkills, setOtherSkills] = useState([] as Skill[])
    const [createdByMeSkills, setCreatedByMeSkills] = useState([] as Skill[])

    useEffect(() => {
        api.get('skills').then(({ data }) => {
            setOtherSkills(data)
        })
    }, [])

    function renderCreatedByMe() {
        if (!createdByMeSkills.length) {
            return <NoContent />
        } else {
            return createdByMeSkills.map((item, i) => (
                <Col sm={3}>

                    <CardDefault
                        key={i}
                        titleText={item.name || 'skill'}
                        descriptionText={item.description || 'description'}
                    >
                    </CardDefault>
                </Col>
            ))
        }
    }

    return (
        <div>
            
            <Header />
            <DisplayFlexCentralizer>
                <MarginVerticalSimple>
                    <AreaSelection />
                </MarginVerticalSimple>
            </DisplayFlexCentralizer>
            <DisplayFlexCentralizer>
                <AreaNew>
                    <AiOutlinePlus size={24} />
                </AreaNew>
            </DisplayFlexCentralizer>
            <div>
                <TitleTopic>CRIADAS POR MIM</TitleTopic>
                <Row>
                    {
                        renderCreatedByMe()
                    }
                </Row>
            </div>
            <div>
                <TitleTopic>OUTRAS</TitleTopic>
                <Row>
                    {
                        otherSkills.map((item, i) => (
                            <Col sm={3}>
                                <CardDefault
                                    key={i}
                                    titleText={item.name || 'skill'}
                                    descriptionText={item.description || 'description'}
                                >
                                </CardDefault>
                            </Col>
                        ))
                    }
                </Row>
            </div>
            <FooterComponent />
        </div>
    )
}



export default SkillsPage