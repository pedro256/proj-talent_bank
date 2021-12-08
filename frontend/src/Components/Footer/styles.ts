import styled from "styled-components";
import { ColorsPallet } from "../../Styles/colors";

interface FooterPropsStyle{
    primary?:boolean
}

export const Footer = styled.footer<FooterPropsStyle>`
    background-color: ${props => props.primary? ColorsPallet.primary:ColorsPallet.background};
    border-radius: ${ props => props.primary? "125px 125px 0px 0px" : "0px"};
    color: ${props => props.primary? ColorsPallet.blank:ColorsPallet.softBlack};
    padding: 64px 24px 64px 24px;
`

export const Title = styled.h3`
    font-weight:bold;
    font-size:18px;
    align-items: center;
    text-align:center;
    
`
export const TitleMain = styled(Title)`
    font-size:24px;
`