
import styled, {createGlobalStyle} from "styled-components";
import { ColorsPallet } from "./colors";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        background: #E2E1E1;
        font-size: 14px;
        color:#292929;
        font-family:Arial, Helvetica, sans-serif;
    }

`
export interface InputProps{
    large?:boolean
}
export const Input = styled.input<InputProps>`
    border:none;
    align-items: center;
    background-color: ${ColorsPallet.softBlank};
    padding: 10px;
    ${props => props.large?"width: 400px":""}
`
export const PaddingSimple = styled.div`
    padding:4px
`
export const DisplayFlexCentralizer  = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

interface MarginVerticalSimpleProps{
    margin?:string;
}
export const MarginVerticalSimple = styled.div<MarginVerticalSimpleProps>`

    margin-top: ${props => props.margin?props.margin:"18px"};
    margin-bottom: ${props => props.margin?props.margin:"18px"};
    width: max-content;
`

export const TextCentralizerFooter = styled.h6`
    text-align: center;
`

export const AreaNew = styled.div`
    background-color: ${ColorsPallet.blank};
    padding: 15px;
    border-radius: 60px;
    color: ${ColorsPallet.primary};
`

export const TitleTopic = styled.h3`
    color:${ColorsPallet.softBlack};
    margin-left: 36px;
    text-align: left;
    font-weight:lighter
`

export const InputForm = styled(Input)`
    border: 2px solid ${ColorsPallet.gray};
    width: 90%;
`
export const RegisterContainer = styled.div`
    background-color: ${ColorsPallet.softBlank};
    width: 800px;
    border-radius: 8px;
`
export const RegisterHeader = styled.div`
    background-color: ${ColorsPallet.primary};
    padding:18px;
    width: 100%;
    & h2{
        text-align: center;
        color:  ${ColorsPallet.blank};
        font-weight:bold;

    }
    & label{
        color:  ${ColorsPallet.gray};
        font-weight:bold;
        margin-top: 18px;
        margin-bottom: 18px;
    }
`

export const InputGroup = styled.div`
    display: inline;
    margin-top: 45px;
    padding:8px;
    & label{
        font-weight:bold;
        padding: 8px;
    }
`