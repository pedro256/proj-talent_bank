import React, { useEffect, useState } from "react"
import { api } from "../../Api"
import { CardDefault } from "../../Components/Cards/CardDefault"
import FooterComponent from "../../Components/Footer"
import { Loading } from "../../Components/FeedbackMsg/Loading"
import { Skill } from "../../Models/Skills"
import { Talent } from "../../Models/Talent"
import { DisplayFlexCentralizer, MarginVerticalSimple } from "../../Styles/global"
import { H1TitleMain, H3DescriptionMain, HeaderHomePageContainer, InputSeacher, Title } from "./styles"
import Header from "../../Components/Header"

const Home: React.FC = () => {

    const [skills, setSkills] = useState([] as Array<Skill>)
    const [talents, setTalents] = useState([] as Array<Talent>)

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        try {
            api.get('skills').then((s) => {
                setSkills(s.data)

            })
            api.get('talents').then((t) => {
                setTalents(t.data)
            })
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }, [])


    function getListTalent() {
        if (!loading) {
            let listTalentsRank = talents.filter((item, index) => index < 3)

            const result = listTalentsRank.map((i, ind) => (
                <CardDefault
                    key={ind}
                    titleText={i.name || ''}
                    descriptionText={i.description || ''}
                    extraSkills={i.skills}
                >
                </CardDefault>
            ))
            return result
        } else {
            return (
                <Loading />
            )
        }

    }
    function getListSkills() {
        if (!loading) {
            let lSkills = skills.filter((item, index) => index < 3)

            const result = lSkills.map((i, ind) => (
                <CardDefault
                    key={ind}
                    titleText={i.name || ''}
                    descriptionText={i.description || ''}
                />
            ))
            return result
        } else {

            return (
                <Loading />
            )
        }

    }

    return (
        <div>
            
            <Header />
            <HeaderHomePageContainer>
                <H1TitleMain>ENCONTRE O PROFISSIONAL QUE VOCÊ PRECISA</H1TitleMain>
                <H3DescriptionMain>FACIL E RÁPIDO</H3DescriptionMain>
                <DisplayFlexCentralizer>
                    <MarginVerticalSimple>
                        <InputSeacher
                            placeholder="procure talentos aqui ..."
                        ></InputSeacher>
                    </MarginVerticalSimple>
                </DisplayFlexCentralizer>
            </HeaderHomePageContainer>

            <DisplayFlexCentralizer>
                <div>

                    <Title primary>TOP TALENTOS</Title>

                    <DisplayFlexCentralizer>
                        {
                            getListTalent()
                        }
                    </DisplayFlexCentralizer>
                </div>
            </DisplayFlexCentralizer>

            <DisplayFlexCentralizer>
                <div>

                    <Title primary>TOP HABILIDADES</Title>
                    <DisplayFlexCentralizer>
                        {
                            getListSkills()
                        }
                    </DisplayFlexCentralizer>
                </div>
            </DisplayFlexCentralizer>

            <FooterComponent primary />
        </div>

    )
}

export default Home