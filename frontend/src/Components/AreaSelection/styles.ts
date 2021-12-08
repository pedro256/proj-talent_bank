import { color } from '@mui/system'
import styled from 'styled-components'
import { ColorsPallet } from '../../Styles/colors'

export const AreaSelectionDiv = styled.div`
    background-color: ${ColorsPallet.gray};
    width: max-content;
    border-radius: 12px;
    padding:24px;
    
`

export const InputTextAreaSelection = styled.input`
    border:none;
    width: 150px;
    height: 30px;
    padding:8px;
    border-radius: 8px;
`

export const ItemSelected = styled.span`
    padding:8px;
    background-color: ${ColorsPallet.softBlank};
    font-weight: bold;
    padding:8px;
    border-radius: 8px;
    margin-right: 8px;
    margin-left:8px;
`