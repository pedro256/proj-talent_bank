import styled from "styled-components";
import { ColorsPallet } from "../../Styles/colors";
import { Input } from "../../Styles/global";

export const HeaderHomePageContainer = styled.div`
    background-color: ${ColorsPallet.primary};
    border-radius: 0 0 125px 125px;
    padding: 20px;
    color: ${ColorsPallet.blank};
`

export const H1TitleMain = styled.h1`
    text-align:center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 36px;
    line-height: 84px;
`

interface TitleProps{
    primary?:true
}
export const Title = styled.h3<TitleProps>`
    text-align:center;
    margin:30px 10px 10px;
    color:${props => props.primary?ColorsPallet.primary:ColorsPallet.softBlack};
    font-weight: bold;
`
export const H3DescriptionMain = styled.h3`
    text-align: center;
    text-transform:uppercase;
    font-weight:400;
`

export const InputSeacher = styled(Input)`
    border-radius: 10px;
    font-size: 18px;
    width: 600px;
`
