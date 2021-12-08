import styled from 'styled-components'
import { ColorsPallet } from '../../Styles/colors'

export const LoginContainer = styled.div`
    background-color: ${ColorsPallet.softBlank};
    width: 750px;
    border-radius: 8px;
`

export const SideInfor = styled.div`
    background-color: ${ColorsPallet.primary};
    width: 100%;
    height: 100%;
    padding: 32px;
    color:${ColorsPallet.softBlank}
`

export const FormLogin = styled.div`
    width: 100%;
    height: 100%;
    padding: 32px;
    text-align: center;
`

export const TitleSideInfor = styled.h3`
    text-decoration-style: solid;
`
export const DescriptionSideInfor = styled.p`

    margin-top: 24px;
    margin-bottom: 24px;
    font-weight: bold;
`

export const TitleForm = styled.h3`
    font-weight:bold;
`

export const DividerSide = styled.div`
    height: 6px;
    width: 120px;
    background-color: ${ColorsPallet.softBlank};
`