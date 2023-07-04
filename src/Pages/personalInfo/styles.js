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
    width: 100%;
    height: 100%;
`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const LabelAndError = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;
const Label = styled.label`
    color: #022959;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const Error = styled.p`
    color:#EE374A;
    text-align: right;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const Input = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #D6D9E6;
    background: #FFF;
    padding-left: 16px;
    color: #022959;
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    :focus{
        border: 1px solid #483EFF;
    }
    &.error{
        border: 1px solid #EE374A;
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    padding-top: 35px;
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
    cursor: pointer;
    :disabled{
        cursor: not-allowed;
    }
    :hover{
        background:  #164A8A;
    }
`;
export {MainContainer,Caption,Title,TitleContainer,Button,ButtonContainer,Error,Form,Input,InputContainer,Label,LabelAndError};