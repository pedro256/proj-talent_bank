import React, { useEffect, useState } from "react"
import { DisplayFlexCentralizer, Input, MarginVerticalSimple, TitleTopic } from "../../Styles/global"
import {GrSearch} from 'react-icons/gr'
import AreaSelection from "../../Components/AreaSelection"
import { Talent } from "../../Models/Talent"
import { api } from "../../Api"
import { NoContent } from "../../Components/FeedbackMsg/NotContent"
import { Col, Row } from "reactstrap"
import { CardDefault } from "../../Components/Cards/CardDefault"
import FooterComponent from "../../Components/Footer"
import Header from "../../Components/Header"

const TalentsPage:React.FC = ()=>{

    const [otherTalent, setOtherTalent] = useState([] as Talent[])
    const [createdByMeTalent, setCreatedByMeTalent] = useState([] as Talent[])

    useEffect(() => {
        api.get('talents').then(({ data }) => {
            setOtherTalent(data)
        })
    }, [])


    function renderCreatedByMe() {
        if (!createdByMeTalent.length) {
            return <NoContent />
        } else {
            return createdByMeTalent.map((item, i) => (
                <Col sm={3}>

                    <CardDefault
                        key={i}
                        titleText={item.name || 'talent'}
                        descriptionText={item.description || 'description'}
                        extraSkills={item.skills}
                    >
                    </CardDefault>
                </Col>
            ))
        }
    }

    return(
        <div>
            
            <Header />
            <DisplayFlexCentralizer>
                <MarginVerticalSimple>
                    <Input large/>
                    <GrSearch size={28}/>
                </MarginVerticalSimple>
            </DisplayFlexCentralizer>
            <DisplayFlexCentralizer>
                <AreaSelection/>
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
                        otherTalent.map((item, i) => (
                            <Col sm={3}>
                                <CardDefault
                                    key={i}
                                    titleText={item.name || 'talent'}
                                    descriptionText={item.description || 'description'}
                                    extraSkills={item.skills}
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


export default TalentsPage