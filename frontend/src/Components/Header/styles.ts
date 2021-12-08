import styled from "styled-components"
import { ColorsPallet } from "../../Styles/colors";
const HeaderDiv = styled.div`
    background-color: ${ColorsPallet.primary};
    padding: 32px;
    color: ${ColorsPallet.softBlank};
`;

export const TextNav= styled.h3`
    font-size: 18px;
    font-weight:bold;
    color: ${ColorsPallet.softBlank};
`
export const DivNavItens = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const CenterItens = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export default HeaderDiv