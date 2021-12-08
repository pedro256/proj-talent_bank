import styled from "styled-components";
import { ColorsPallet } from "../../Styles/colors";


interface CardShowerProps{
    large?:boolean
}

function getWidth(large=false):string{
    if(large){
        return '300px'
    }
    return '260px'
}

function getHeight(large=false):string{
    if(large){
        return '320px'
    }
    return '280px'
}

export const CardShower = styled.div<CardShowerProps>`
    background-color: ${ColorsPallet.primary};
    width:${props=> getWidth(props.large)};
    height: ${props => getHeight(props.large)};
    box-shadow: 1px 10px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 43px 0px 45px;
    padding: 58px 18px 18px 18px;
    margin:18px;
`
export const CardMini = styled.div`
    background-color: ${ColorsPallet.blank};
    padding:4px;
    width: max-content;
    height: max-content;
    display: flex;
    border-radius: 5px;
    margin:10px;
`
export const CardMiniTitle = styled.h4`
    font-size: 12px;
    font-weight:bold;
    text-align: center;
    align-items: center;
`

export const TitleText = styled.h3`
    color: ${ColorsPallet.softBlank};
    text-align: center;
`
export const DescriptionText = styled.p`
    color: ${ColorsPallet.softBlank};
    text-align: center;
`