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
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 100%;
`;
const AddonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;
const Addon = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    width: 100%;
    height: 80px;
    padding: 24px 18px;
    border-radius: 8px;
    border: 1px solid #D6D9E6;
    background: #FFF;
    cursor: pointer;
    :hover{
        border: 1px solid  #483EFF;
    }
    &.selected{
        border: 1px solid  #483EFF;
        background:  #F8F9FF;
    }
`;
const CheckBox = styled.input`
    pointer-events: none;
`;
const AddonDetails = styled.div`
    pointer-events: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const AddonText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const AddonTitle = styled.p`
    color:#022959;
    font-size: 16px;    
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
const AddonDesc = styled.p`
    color:#9699AA;
    font-size: 14px;    
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const AddonPrice = styled.p`
    color:#483EFF;
    font-size: 14px;    
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 400;
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

export {MainContainer,Caption,Title,TitleContainer,Form,ButtonContainer,GoBackButton,Button,Addon,AddonDesc,AddonDetails,AddonPrice,AddonText,AddonTitle,AddonsContainer,CheckBox};