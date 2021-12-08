import { ColorPartial } from '@mui/material/styles/createPalette'
import { PromptProps } from 'react-router-dom'
import styled from 'styled-components'
import { ColorsPallet } from '../../Styles/colors'


interface ButtonDefaultProps{
    backgroundColor?:ColorsPallet
    fontColor?:ColorsPallet
    fontSize?:string
}
export const ButtonDefault = styled.button<ButtonDefaultProps>`
    margin: 16px 0 16px 0;
    padding:8px 18px 8px 18px;
    border:none;
    background-color: ${props => props.backgroundColor?props.backgroundColor:ColorsPallet.primary};
    color:  ${props => props.fontColor?props.fontColor:ColorsPallet.softBlank};
    font-weight: bold;
    border-radius: 8px;
    font-size: ${props => props.fontSize};

`