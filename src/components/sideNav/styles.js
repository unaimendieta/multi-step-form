import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
    width: 274px;
    height: 568px;
    background-image: url('../../images/bg-sidebar-desktop.svg');
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px 40px;
`;
const StepContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;
const NumContainer = styled(NavLink)`
    width: 33px;
    height: 33px;
    border-radius: 100%;
    border: 1px solid #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    text-decoration: none;
    color: #FFF;
    &.active{
        border: none;
        background: #BEE2FD;
    text-decoration: none;
        color: #022959;
    }
`;
const Num = styled.p`
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
`;
const StepTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
const StepNum = styled.p`
    color: #ABBCFF;
    font-size: 12px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const StepTitle = styled.p`
    color: #ffffff;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
`;
export {MainContainer,Num, NumContainer,StepContainer,StepNum,StepTextContainer,StepTitle};