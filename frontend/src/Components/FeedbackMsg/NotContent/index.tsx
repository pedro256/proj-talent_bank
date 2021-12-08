import React from "react"
import { TextFeedback } from "../style"

interface NoContentProps{
    what?:string
}

export const NoContent:React.FC<NoContentProps> = ({what})=>{

    let rest =  "."
    if(what){
        rest=" em "+what+"."
    }

    return (
        <div>
            <TextFeedback>
                {
                    "Nada Encontrado" + rest
                }
            </TextFeedback>
        </div>
    )
}