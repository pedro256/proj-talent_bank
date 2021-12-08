import React, { useState } from "react"
import { AreaSelectionDiv, InputTextAreaSelection, ItemSelected } from "./styles"

const AreaSelection:React.FC = ()=>{

    const [itens,setItens] = useState(['programming', 'design'] as String[])
    const [cItem,setCItem] = useState("")


    function setCItemValue(e:any):void{
        setCItem(e)
    }

    function setItem(e:string){
        setItens([e,...itens])
        setCItem("")
    }
    return (
        <AreaSelectionDiv>
            <InputTextAreaSelection type="text" value={cItem} onChange={e=>setCItemValue(e.target.value)}  onKeyDown={e => e.key=='Enter'? setItem(e.currentTarget.value):()=>{}}/>
            {
                itens.map((item)=>(
                    <ItemSelected>{item}</ItemSelected>
                ))
            }
        </AreaSelectionDiv>
    )
}

export default AreaSelection