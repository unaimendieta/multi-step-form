import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
const Title = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    color: #022959;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const Caption = styled.p`
    font-family: 'Ubuntu', sans-serif;
    color: #9699AA;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
`;
const SummaryContainer = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 100%;
`;
const PlanSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    height: 100%;
`;
const PlanSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
    background: #F8F9FF;
`;
const PlanDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;
const PlanText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const PlanName = styled.p`
    color:#022959;
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
const ChangeFrequency = styled(NavLink)`
    text-decoration: underline;
    color:#9699AA;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const PlanPrice = styled.p`
    color:#022959;
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const Line = styled.div`
    width: 100%;
    height: 1px;
    opacity: 0.2043253630399704;
    background: #9699AA;
`;
const Addons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const Addon = styled.div`
    display: flex;
    justify-content: space-between;
`;
const AddonName = styled.p`
    color:#9699AA;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const AddonPrice = styled.p`
    color:#022959;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const TotalPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const TotalText = styled.p`
    color:#9699AA;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const TotalValue = styled.p`
    color:#483EFF;
    font-size: 20px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 35px;
`;
const GoBackButton = styled.button`
    font-family: 'Ubuntu', sans-serif;
    color: #9699AA;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    background: none;
    cursor: pointer;
    :hover{
        color: #022959;
    }
`;
const Button = styled.button`
    width: 123px;
    height: 48px;
    border-radius: 8px;
    background:  #022959;
    color: #FFF;
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    text-decoration: none;
    padding: 12px 0;
    :hover{
        background:  #164A8A;
    }
    :disabled{
        cursor: not-allowed;
    }
`;

export {MainContainer,Caption,Title,TitleContainer,SummaryContainer,ButtonContainer,GoBackButton,Button,Addon,AddonName,AddonPrice,Addons,ChangeFrequency,Line,PlanDetails,PlanName,PlanPrice,PlanSummary 
,PlanText,PlanSummaryContainer,TotalPriceContainer,TotalText,TotalValue};