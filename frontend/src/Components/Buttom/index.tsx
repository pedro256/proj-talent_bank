import React from "react"
import { ColorsPallet } from "../../Styles/colors"
import { ButtonDefault } from "./styles"


interface ButtonProps{
    fontSize?:string
    fontColor?:ColorsPallet
}

export const Button:React.FC<ButtonProps> = ({children,fontSize="14px",fontColor=ColorsPallet.blank})=>{
    return (
        <ButtonDefault fontSize={fontSize} fontColor={fontColor}>
            {
                children
            }
        </ButtonDefault>
    )
}