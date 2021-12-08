import { Rating } from "@mui/material"
import React from "react"
import { Skill } from "../../Models/Skills"
import { DisplayFlexCentralizer } from "../../Styles/global"
import { CardMini, CardMiniTitle, CardShower,DescriptionText,TitleText } from "./styles"


interface CardDefaultProps{
    titleText:string,
    descriptionText:string,
    large?:boolean,
    extraSkills?:Skill[]

}

export const CardDefault: React.FC<CardDefaultProps> = (
    {titleText,large=false,descriptionText,extraSkills}
    )=>{
    

    return (
        <CardShower large={large}>
            <TitleText>{titleText}</TitleText>
            <DescriptionText>{descriptionText}</DescriptionText>
            <DisplayFlexCentralizer>
            <Rating
                name="simple-controlled"
                value={5}
                onChange={(event, newValue) => {
                }}
            />
            </DisplayFlexCentralizer>
            <DisplayFlexCentralizer>
                {
                    extraSkills?.map((item)=>(
                            <MiniCardList title={item.name} />
                    ))
                }
            </DisplayFlexCentralizer>
        </CardShower>
    )
}

interface MiniCardListProps{
    title?:string
}
const MiniCardList:React.FC<MiniCardListProps> = ({title})=>{
    return (
        <CardMini>
            <CardMiniTitle>{title}</CardMiniTitle>
        </CardMini>
    )
}