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
const Form = styled.form`
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 100%;
`;
const PlanSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
`;
const Plans = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 18px;
    width: 100%;
    height: 160px;
`;
const Plan = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 20px;
    border-radius: 8px;
    border: 1px solid  #D6D9E6;
    background:  #FFF;
    cursor: pointer;
    &.selected{
        border: 1px solid #483EFF;
        background:  #F8F9FF;
    }
`;
const Icon = styled.img`
    pointer-events: none;
    width: 40px;
    height: 40px;
`;
const PlanDetails = styled.div`
    pointer-events: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const Name = styled.p`
    color: #022959;
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
const Price = styled.p`
    color: #9699AA;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const Offer = styled.p`
    color: #022959;
    font-size: 12px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const PaymentTypeContainer = styled.div`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    background: #F8F9FF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
    
`;
const PaymentType = styled.p`
    font-family: 'Ubuntu', sans-serif;
    color: #9699AA;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &.actual{
        color: #022959;
    }
`;
const PaymentTypeSelector = styled.input`
    display: none;
    :checked + label::after{
        transform: translateX(calc(38px - 100% - 4px));
    }
`;
const Toggle = styled.label`
        position: relative;
        display: inline-block;
        width: 38px;
        height: 20px;
        background: #022959;
        border-radius: 20px;
        ::after{
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 16px;
            border-radius: 50%;
            height: 16px;
            background-color: white;
            transition: transform 0.3s;
        }
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
const SubmitButton = styled.button`
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

export {MainContainer,Caption,Title,Offer,Toggle,TitleContainer,ButtonContainer,Form,GoBackButton,PaymentTypeSelector,Icon,Name,PaymentType,PaymentTypeContainer,Plan,PlanDetails,PlanSelectContainer,Plans,Price,SubmitButton};